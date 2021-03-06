import styled from "styled-components";

const ContainerWrapper = styled.div`
  max-width: 85%;
  margin: 0 auto;
  overflow: hidden;
`;

export default function Container(props) {
  return <ContainerWrapper>{props.children}</ContainerWrapper>;
}
