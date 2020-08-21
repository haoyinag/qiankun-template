/** @format */

import React, { FC } from "react";

interface Props {
  name: string;
}

export const Home: FC<Props> = ({ name = "Jenny" }) => {
  return <div>{name}</div>;
};
