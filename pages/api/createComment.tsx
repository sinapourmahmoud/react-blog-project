import React from "react";
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity";
const createComment = async (req: NextApiRequest, res: NextApiResponse) => {
  let { comment, _id, name, email } = JSON.parse(req.body);
  try {
    await client.create({
      _type: "comment",
      post: {
        _type: "refrence",
        _ref: _id,
      },
      name,
      email,
      comment,
    });
  } catch (err) {
    res.status(500).json({ message: "Problem" });
  }
  res.status(200).json({ message: "Comment Send !!" });
};
// skSP62EoSUtfvEMt1BnxtkmtXN1QEdkGIJ92wyurBFu4eSQZLKjiJTX6ZrDGTT75XfBbA1AJii5xz3DMIXCdA2z6Lx2XXbcciZv3SaVsLTXsOV9cPqpVlw9xkT0P1lCU5wDFwfljD9fND5gg4Okp0sMG6Ka3AOcthksqHXz4Cvyj6wfSAhUy
export default createComment;
