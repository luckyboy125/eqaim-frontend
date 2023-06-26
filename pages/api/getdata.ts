import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (typeof process.env.BASE_URL !== "undefined") {
      const url = process.env.BASE_URL;
      const response: any = await axios.post(`${url}/add`, req.body);
      return res.status(200).json(response.data);
    }
  } catch (error: any) {
    if (res.statusCode === 400) {
      return res.status(400).json(error.response.data);
    } else {
      return res.status(500).json(error.response.data);
    }
  }
};
