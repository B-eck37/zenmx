import React, { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useCurrentMode } from "../../hooks/currentMode";
import { TeamStyled } from "../../styles";
import { Button, WeeklyPicks } from "../../components";
import { useIsMountedRef } from "../../hooks";
import { roundData } from "../../constants";

// TODO create league select

const Team = () => {
  const { currentMode } = useCurrentMode();
  const [league, setLeague] = useState("");
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState("");
  const [selectedRiders, setSelectedRiders] = useState([]);
  const { user, isLoading } = useUser();
  const router = useRouter();
  const isMounted = useIsMountedRef();

  useEffect(() => {
    if (success) {
      setTimeout(() => setSuccess(""), 1500);
    }
    if (!isMounted.current) return;
    if (entries.length) return;
    if (!isLoading && !user) {
      router.push("/login");
      return;
    }

    // WEEKLY UPDATE: change entry list week
    axios
      .get("/api/check-entry-list?week=three")
      .then((res) => {
        if (isMounted.current) {
          setLoading(false);
          setEntries(res.data.data);
        }
      })
      .catch((err) => console.err(err));
  });

  const selectedRidersWithErrors = useMemo(() => {
    if (!selectedRiders || !selectedRiders?.length) return [];
    const riderNames = [];
    return selectedRiders.map((rider) => {
      const indexOfRiderName = riderNames.indexOf(rider.riderName);
      if (rider.position === 100 || indexOfRiderName === -1) {
        riderNames.push(rider.riderName);
        return { ...rider, error: "" };
      }
      return {
        ...rider,
        error: `Please change pick #${indexOfRiderName + 1}`,
      };
    });
  }, [selectedRiders]).sort((a, b) => a.position - b.position);

  const hasPickErrors = useMemo(() => {
    if (selectedRidersWithErrors.length !== 7) return true;
    return selectedRidersWithErrors.reduce(
      (result, currentRider) => (currentRider.error ? true : false),
      false
    );
  });

  if (loading) {
    return <CircularProgress />;
  }

  const removeErrors = (riders) => {
    return riders.map(({ error, ...rest }) => ({ ...rest }));
  };

  const saveUserPicks = () => {
    const cleanseSelectedRiders = removeErrors(selectedRiders);

    const params = JSON.stringify({
      email: user.email,
      bigBikePicks: cleanseSelectedRiders,
      week: roundData.currentRound,
      totalPoints: 0,
      league,
    });

    axios
      .post("/api/save-picks", params, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setSuccess("Saved picks successfully!");
        setSelectedRiders([]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <TeamStyled currentMode={currentMode}>
      <WeeklyPicks
        riders={entries}
        selectedRiders={selectedRidersWithErrors}
        setSelectedRiders={setSelectedRiders}
      />
      <div className="team-submit-success">{success}</div>
      <Button
        label="Save Team"
        onClick={saveUserPicks}
        disabled={hasPickErrors}
        className="team-save-button"
      />
    </TeamStyled>
  );
};

export default Team;
