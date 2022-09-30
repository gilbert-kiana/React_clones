import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { setMovies } from "../features/user/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommend = [];
  let newDisney = [];

  useEffect(() => {
    const q = query(collection(db, "movies"));
    const unsub = onSnapshot(q, (snapshot) => {
      console.log(
        "Data",
        snapshot.docs.map((doc) => {
          switch (doc.data().type) {
            case "recommend":
              recommend = [...recommend, { id: doc.id, ...doc.data() }];
              break;
            case "new":
              newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
          }
        })
      );
    });

    dispatch(
      setMovies({
        recommend: recommend,
        newDisney: newDisney,
      })
    );
  }, [userName]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vh + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
