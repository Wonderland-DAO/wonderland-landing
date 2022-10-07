import { WONDERLAND_TREASURY_BALANCE } from "src/constants/endpoints";
import axios from "axios";

export const getTreasuryBalance = async () => {
    const { data } = await axios.get(WONDERLAND_TREASURY_BALANCE);
    return data.illiquid;
};
