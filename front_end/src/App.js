import { useAccount, useConnect, useDisconnect, useContractWrite } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import networkMapping from "../chain-info/deployments/map.json";
import ContratoInversion from "../chain-info/contracts/ContratoInversion.json";

import React, { useState } from "react";
import ellipse2 from "./img/ellipse-2.png";
import frame151 from "./img/frame-1-5-1.png";
import group22 from "./img/group-22.png";
import rectangle32 from "./img/rectangle-32.png";
import "./App.css";

function ButtonConnect() {
  const { address } = useAccount();
  const { connect, isConnecting } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (address) {
    return (
      <button className="btn frame-wrapper" onClick={disconnect}>
        <div className="div-wrapper">
          <div className="text-wrapper-14">Desconectar</div>
        </div>
      </button>
    );
  }

  if (isConnecting) {
    return (
      <button className="btn frame-wrapper">
        <div className="div-wrapper">
          <div className="text-wrapper-14">Conectando...</div>
        </div>
      </button>
    );
  }

  return (
    <button className="btn frame-wrapper" onClick={() => connect()}>
      <div className="div-wrapper">
        <div className="text-wrapper-14">Conectar Billtera</div>
      </div>
    </button>
  );
}

function ButtonInvest() {
  const [textoDelInput, setTextoDelInput] = useState("");
  const { chainId } = 11155111;
  const tokenFarmAddress =
    networkMapping[String(chainId)]["ContratoInversion"][0];

  const handleInputChange = (event) => {
    const nuevoTexto = event.target.value;
    setTextoDelInput(nuevoTexto);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Texto del input:", textoDelInput);
  };

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: tokenFarmAddress,
    abi: ContratoInversion,
    functionName: "Invertir",
  });

  if (isLoading) {
    return (
      <div>
        <form className="overlap-6" onSubmit={handleSubmit}>
          <input
            className="rectangle-10 text-wrapper-10"
            type="int"
            value={textoDelInput}
            onChange={handleInputChange}
          />
          <div className="text-wrapper-9">Tokens a comprar</div>
          <div className="code-to-designdiv">
            <button className="button">
              <div className="text-wrapper-11">Transfiriendo...</div>
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <form className="overlap-6" onSubmit={handleSubmit}>
        <input
          className="rectangle-10 text-wrapper-10"
          type="int"
          value={textoDelInput}
          onChange={handleInputChange}
        />
        <div className="text-wrapper-9">Tokens a comprar</div>
        <div className="code-to-designdiv">
          <button
            className="button"
            type="submit"
            disabled={!write}
            onClick={() =>
              write({
                args: ["0xbc88A53E262A12353E8eC9D513D136f2C462FFBe"],
                from: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
                value: { textoDelInput } * 0.000001,
              })
            }
          >
            <div className="text-wrapper-11">Invertir</div>
          </button>
        </div>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="INVERTIR-EN-PROYECTO">
      <div className="div">
        <img className="frame" alt="Frame" src={frame151} />
        <div className="overlap">
          <div className="overlap-group">
            <img className="rectangle" alt="Rectangle" src={rectangle32} />
            <div className="ellipse" />
            <img className="img" alt="Ellipse" src={ellipse2} />
            <div className="text-wrapper">Alquichain</div>
          </div>
          <p className="p">
            Simplificamos el proceso de alquilar propiedades con tecnología
            Blockchain
          </p>
          <div className="overlap-2">
            <div className="rectangle-2" />
            <div className="text-wrapper-2">Deadline: 20/10/23</div>
          </div>
          <div className="overlap-3">
            <div className="scroll">
              <div className="text-wrapper-3">Links vídeos del proyecto</div>
              <div className="overlap-group-2">
                <div className="rectangle-3" />
                <a
                  className="text-wrapper-4"
                  href="https://www.youtube.com/watch?v=mCdA4bJAGGk"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://www.youtube.com/watch?v=mCdA4bJAGGk
                </a>
              </div>
              <div className="text-wrapper-5">Links fotos del proyecto</div>
              <div className="rectangle-4" />
              <div className="text-wrapper-6">
                Links documentos del proyecto
              </div>
              <div className="rectangle-5" />
            </div>
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <div className="rectangle-8" />
            <a
              className="text-wrapper-7"
              href="https://www.metroworldnews.com/noticias/2022/05/24/chems-el-perrito-de-los-memes-esta-enfermo-mira-lo-que-ocurre-con-el/"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://www.metroworldnews.com/noticias/2022/05/24/chems-el-perrito-de-los-memes-esta-enfermo-mira-lo-que-ocurre-con-el/
            </a>
            <a
              className="text-wrapper-8"
              href="https://www.youtube.com/watch?v=mCdA4bJAGGk"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://www.youtube.com/watch?v=mCdA4bJAGGk
            </a>
            <p className="el-proyecto">
              El proyecto actualmente cuenta
              con&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              tokens. Cada token tiene un valor
              de&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;en
              dolares y un valor de procentaje de la empresa de
            </p>
          </div>
        </div>
        <div className="overlap-4">
          <p className="text-wrapper-9">
            El proyecto tiene
            disponible&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            tokens.
          </p>
          <div className="rectangle-9" />
        </div>
        <div className="overlap-5">
          <ButtonInvest />
          <div className="overlap-7">
            <div className="rectangle-10" />
            <div className="text-wrapper-12">200</div>
            <div className="text-wrapper-9">Tokens disponibles</div>
          </div>
          <div className="text-wrapper-13">Invierte</div>
        </div>
        <img className="group" alt="Group" src={group22} />
        <ButtonConnect />
      </div>
    </div>
  );
}

export default App;
