import { useAccount, useConnect, useDisconnect, useContractWrite } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import networkMapping from "./chain-info/deployments/map.json";
import ContratoInversion from "./chain-info/contracts/ContratoInversion.json";

import { ethers, parseEther } from "ethers";
import React, { useState } from "react";
import "./App.css";

function ButtonConnect() {
  const { address } = useAccount();
  const { connect, isConnecting } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (address) {
    console.log("address", address);
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
  const { address } = useAccount();
  const [textoDelInput, setTextoDelInput] = useState("");
  const tokenFarmAddress = networkMapping["11155111"]["ContratoInversion"][0];
  console.log("aaaaaa", address);
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
    abi: ContratoInversion["abi"],
    functionName: "invertir",
  });

  if (isLoading) {
    console.log("isLoading");
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="int"
            value={textoDelInput}
            onChange={handleInputChange}
          />
          <div>Tokens a comprar</div>
          <div className="code-to-designdiv">
            <button className="button">
              <div className="text-wrapper-11">Transfiriendo...</div>
            </button>
          </div>
        </form>
      </div>
    );
  }

  if (isSuccess) {
    console.log("isSuccess");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="int" value={textoDelInput} onChange={handleInputChange} />
        <div>Tokens a comprar</div>
        <div className="code-to-designdiv">
          <button
            type="submit"
            disabled={!write}
            onClick={() =>
              write({
                args: ["0xbc88A53E262A12353E8eC9D513D136f2C462FFBe"],
                from: address,
                value: parseEther(textoDelInput),
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
    <div>
      <div className="overlap-5">
        <ButtonInvest />
      </div>
      <ButtonConnect />
    </div>
  );
}

export default App;
