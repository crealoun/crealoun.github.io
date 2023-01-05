import React, { useEffect, useMemo, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useTheme } from "@mui/material/styles";
import { useDeviceDetect } from "../../../hooks";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import "./Descentrar.css";
import { Button, Grid } from "@mui/material";
import ModalDescentrar from "./components/ModalDescentrar";

const Container = styled("div")(({ theme }) => ({
  fontFamily: "ui-monospace, monospace",
  padding: "4rem",
  color: "white",
  lineHeight: "21px",
  "--webkit-user-elect": "none",
  userSelect: "none",
  backgroundColor: "#2F4F4F",
}));

const Descentrar = () => {
  const theme = useTheme();
  const { isMobile } = useDeviceDetect();
  const [open, setOpen] = useState(false);
  const [indexContent, setIndexContent] = useState(0);
  const handleOpen = (i) => {
    setOpen(true);
    setIndexContent(i);
  };
  const handleClose = () => setOpen(false);

  const srcButton = [
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837490/dev/A/2_bm4frq.png",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837531/dev/B/3._olores_que_narran._mafe_m8r4eo.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837540/dev/C/4.gabi._experiencia_plaza_ztx0jl.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837708/dev/D/3.olores_que_narran._laura_ovlh3k.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837718/dev/E/1_zc7gi9.png",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671838764/dev/F/IMG_39071_5x_oaqhsx.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837751/dev/G/1_sjatih.png",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837756/dev/H/2._Cierre_sikuris._Jorge_Torres_dsrngy.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837768/dev/I/2._laboratorio_sensible._Miguel_o6emqw.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837781/dev/J/3._memorias_yscf9z.png",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837800/dev/K/k1_kcaki0.png",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671839281/dev/L/3._jonathan.cierre_con_sikuris_fjndzf.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671839347/dev/M/1._sarakamila._cena_y_experiencia_plaza_u9s2j1.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671839398/dev/N/2._catalina_daza._cierre_con_sikuris_e0sbbz.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671839464/dev/Ni/WhatsApp_Image_2022-12-13_at_8.25.37_PM_1_tibttt.jpg",
  ];

  const AppropiateContainer = useMemo(
    () =>
      ({ children }) => {
        return !isMobile ? (
          <Container>{children}</Container>
        ) : (
          <ScrollContainer
            className="scroll-container"
            style={{
              fontFamily: "ui-monospace, monospace",
              padding: "4rem",
              width: "calc(100vw - 6rem)",
              height: "calc(100vh - 2rem)",
              color: theme.palette.text.primary,
              lineHeight: "21px",
              "--webkit-user-select": "none",
              overflow: "hidden",
              userSelect: "none",
            }}
          >
            {children}
          </ScrollContainer>
        );
      },
    [isMobile]
  );

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <div id="descentrar-background" />
      <AppropiateContainer>
        <Container>
          <h1
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 800,
              fontSize: "38px",
              lineHeight: "46px",
            }}
          >
            Descentramientos
          </h1>
          <br />
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-start"
            spacing={{ xs: 2, md: 6 }}
            style={{marginTop:"20rem"}}
          >
            {srcButton.map((element, index) => (
              <Grid item xs={8} key={index}>
                <Item>
                  <Button
                    onClick={() => handleOpen(index)}
                    style={{ zIndex: 2001, margin: 0, padding: 0 }}
                  >
                    <img src={element} width={213} height={213} />
                  </Button>
                </Item>
              </Grid>
            ))}
          </Grid>
          <ModalDescentrar open={open} indexContent={indexContent} handleClose={handleClose} style={{zIndex:2001}}/>
        </Container>
      </AppropiateContainer>
    </>
  );
};

export default Descentrar;
