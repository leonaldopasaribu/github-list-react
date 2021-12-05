import React from "react";

import { UserInfo, Avatar, UserName } from "./Styles";

export default function User({ data }) {
  return (
    <UserInfo>
      {data.avatar_url && <Avatar src={data.avatar_url} alt={data.login} />}
      {data.name && <UserName>{data.name}</UserName>}
    </UserInfo>
  );
}
