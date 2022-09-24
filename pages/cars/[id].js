import { useRouter } from "next/router";
import styled from "styled-components";
import Header from "../components/Header/Header";


export default function car(){
    const router = useRouter();
    const {id} =  router.query;

    return (
        <Header>
            <OuterWrapper>

            </OuterWrapper>
        </Header>
    );
}

const OuterWrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;