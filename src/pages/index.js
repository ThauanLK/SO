import React, { useState, useEffect } from "react";
import {
  FCFS,
  RealTime,
  ValidateDisc,
  ValidateES,
  ValidateMP,
  ValidatePriority,
  readTextFile,
  MakeObjects,
} from "../services/index";
import File from "../services/process.txt";
import { Centralized, Container, Principal, Row, Text, Title } from "./style";

const Simulator = () => {
  const process = {
    arrivalTime: 0,
    priority: 0,
    processorTime: 0,
    mb: 0,
    es: 0,
    disc: 0,
  };

  const [allNumbers, setAllNumbers] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      readTextFile(File, (response) => {
        setAllNumbers(Array.from(response));
      });
    }
    return (mounted = false);
  }, []);

  const row = [];
  const rowReal = [];
  const executing = MakeObjects(process, allNumbers, rowReal, row);
  return (
    <Container>
      <Centralized>
        <Title>Executando:</Title>
        {executing.map((eachProcess) => (
          <Text key={eachProcess.id}>
            Processo {eachProcess.id}: {eachProcess.arrivalTime} chegada no
            momento ,{eachProcess.priority} prioridade (tempo real),{" "}
            {eachProcess.processorTime} duração de segundos de CPU e{" "}
            {eachProcess.mb} memória de MBytes, E/S = {eachProcess.es} e{" "}
            {eachProcess.disc}
          </Text>
        ))}
        <Title>Filas:</Title>
      </Centralized>
    </Container>
  );
};

export default Simulator;
