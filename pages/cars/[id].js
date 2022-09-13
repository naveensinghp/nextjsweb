import { useRouter } from "next/router";
import Header from "../components/Header/Header";

export default function car(){
    const router = useRouter();
    const {id} =  router.query;

    return (
        <Header>

        </Header>
    );
}