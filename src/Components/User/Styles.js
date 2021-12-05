import styled from "styled-components";

const infoColor = "#eeeeee";

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 15px;
  background-color: #f6f6f6;
  border-radius: 5px;
  height: fit-content;
  width: 600px;

  .icons {
    float: left;
    margin: 3px 5px;
  }

  a {
    color: ${infoColor};
  }
`;

export const Avatar = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`;

export const UserName = styled.h3`
  margin-top: 10px;
  color: #000;
`;
