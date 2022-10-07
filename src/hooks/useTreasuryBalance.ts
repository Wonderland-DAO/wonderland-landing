import { useState, useMemo, useEffect } from "react";
import { getTreasuryBalance } from "src/helpers/get-treasury-balance";

export const useTreasuryBalance = (): [boolean, number] => {
    const [treasuryBalance, setTreasutyBalance] = useState<number>(0);

    useEffect(() => {
        getTreasuryBalance().then(total => setTreasutyBalance(total));
    }, []);

    return useMemo<[boolean, number]>(() => [!Boolean(treasuryBalance), treasuryBalance], [treasuryBalance]);
};
