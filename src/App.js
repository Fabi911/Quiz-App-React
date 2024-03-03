import "../src/index.css";
import Card from "./components/Card/card";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <>
      <ContentContainer>
        <Card question="What kind of deer was Bambi?" answer="roe deer" />
        <Card question="What kind of deer was Bambi?" answer="roe deer" />
        <Card question="What kind of deer was Bambi?" answer="roe deer" />
        <Card question="What kind of deer was Bambi?" answer="roe deer" />
        <Card question="What kind of deer was Bambi?" answer="roe deer" />
        <Card question="What kind of deer was Bambi?" answer="roe deer" />
        <Card question="What kind of deer was Bambi?" answer="roe deer" />
        <Card question="What kind of deer was Bambi?" answer="roe deer" />
        <Card question="What kind of deer was Bambi?" answer="roe deer" />
        <Card question="What kind of deer was Bambi?" answer="roe deer" />
        <Card question="What kind of deer was Bambi?" answer="roe deer" />
        <Card question="What kind of deer was Bambi?" answer="roe deer" />
        <Card question="What kind of deer was Bambi?" answer="roe deer" />
      </ContentContainer>
      <NavBar />
    </>
  );
}
