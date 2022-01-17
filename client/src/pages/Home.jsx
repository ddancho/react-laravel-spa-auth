import { Container, Wrapper } from "./styles/Home.styled";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../helpers/api";

export default function Home() {
  const [secret, setSecret] = useState("");
  const { userInfo: user } = useSelector((state) => state.user);

  useEffect(() => {
    api()
      .get("/api/tickets")
      .then((res) => {
        setSecret(res.data.secret);
      })
      .catch((err) => {
        setSecret("");
      });
  }, [user]);

  return (
    <Container>
      <Wrapper>
        <h1>Hello {user.name ? user.name : "stranger"}</h1>
        {user.name ? <p>Secret : {secret} </p> : <p>Login to see secret data...</p>}
      </Wrapper>
    </Container>
  );
}
