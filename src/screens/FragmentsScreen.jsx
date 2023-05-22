import React, { useMemo } from 'react';
import '../css/FragmentsScreen.css'
import Tree from '../components/Tree';
import { styled } from '@mui/system';
import { Globals } from "@react-spring/shared";
import ScrollContainer from 'react-indiana-drag-scroll'
import { useDeviceDetect } from "../hooks/";
import { useQuery } from '@apollo/client';
import { GET_CONCEPTS } from '../graphql/queries/concept';

// necessary for react-spring and react-three-drei to work
Globals.assign({
    frameLoop: "always",
});

const Container = styled('div')(({ theme }) => ({
    width: "100vw",
    height: "100vh",
    padding: "clamp(20px, 10vw, 175px)",
    paddingTop: "clamp(80px, 10vw, 175px)",
    lineHeight: "25px",
    "--webkit-user-elect": "none",
    userSelect: "none",
    overflowX: "scroll",
}));

const FragmentsScreen = () => {
    const { isMobile } = useDeviceDetect();
    const { loading, error, data } = useQuery(GET_CONCEPTS, {
        pollInterval: 500,
    });

    //create a hashmap of concept id to concept object
    const conceptMap = useMemo(() => {
        const conceptMap = {}
        if (!data) return conceptMap
        data.concepts.data.forEach(concept => {
            conceptMap[concept.id] = concept
        })
        return conceptMap
    }, [data])

    //appropriate container for mobile or desktop
    const AppropriateContainer = useMemo(() => ({ children }) => {
        return isMobile ? <Container>{children}</Container> : <ScrollContainer className='scroll-container' style={{
            padding: "clamp(20px, 10vw, 175px)",
            paddingTop: "clamp(80px, 10vw, 175px)",
            width: "calc(100vw - 6rem)",
            height: "calc(100vh - 2rem)",
            lineHeight: "25px",
            "--webkit-user-select": "none",
            overflow: "hidden",
            userSelect: "none",
        }}>{children}</ScrollContainer>
    }, [isMobile])

    return (
        <>
            <div id="fragments-background" />
            <AppropriateContainer>
                {!loading && <Tree treeData={conceptMap} currentNode={data.concepts.data.find(concept => concept.attributes.name == 'Fragmentos')} />}
            </AppropriateContainer>
        </>

    )
}

export default FragmentsScreen