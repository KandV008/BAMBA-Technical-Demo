import { View, Text } from "react-native";
import { styled } from "nativewind";
import { useState } from "react";
import TextButton from "@/components/buttons/textButton";
import { router } from "expo-router";

const StyledView = styled(View);
const StyledText = styled(Text);

const quiz = [
  "Priorizo caminar por calles donde la iluminación cubre todos los tramos sin dejar zonas oscuras.",
  "La vegetación densa en las calles, como arbustos o árboles que bloquean la visibilidad, me genera inseguridad.",
  "Las aglomeraciones excesivas en las calles me hacen sentir vulnerable a robos o incidentes.",
  "Prefiero calles con acceso cercano a servicios como hospitales o transporte público.",
  "La información sobre delitos recientes afecta mi decisión de caminar por ciertas calles.",
  "Me siento más seguro/a en calles concurridas con tiendas abiertas.",
  "Las zonas mal iluminadas me generan desconfianza y temor al caminar solo/a.",
  "El estado de deterioro urbano, como edificios abandonados o basura, reduce mi sensación de seguridad.",
  "La oscuridad en algunas calles me hace dudar sobre la seguridad del recorrido, incluso en zonas conocidas.",
  "Siento inseguridad al caminar en calles completamente desiertas.",
  "La presencia visible de cámaras o patrullas policiales me hace sentir más seguro/a.",
  "Evito calles donde hay poca señal de Internet.",
  "Las calles con esquinas ciegas o poca visibilidad en intersecciones me generan inseguridad.",
  "Me siento más seguro/a caminando en zonas céntricas.",
  "Caminar por barrios que no conozco me genera inseguridad.",
  "La actividad nocturna dinámica en una zona favorece mi decisión de caminar por ella de noche.",
  "La presencia de personas en estado de ebriedad o cuyo comportamiento parece agresivo o impredecible me hace sentir inseguro/a.",
  "La falta de pasos de cebra o señalización clara me genera una sensación de inseguridad.",
];

/**
 * Quiz Component
 * 
 * A quiz interface displaying questions one at a time with multiple choice options.
 * 
 * @returns {JSX.Element} A quiz interface with navigation and result tracking.
 */
export default function Quiz(): JSX.Element {
  const options = [
    "Totalmente en desacuerdo",
    "En desacuerdo",
    "Indiferente",
    "De acuerdo",
    "Totalmente de acuerdo",
  ];

  const [indexQuiz, setIndexQuiz] = useState(0);
  const [results, setResult] = useState<number[]>([]);

  /**
   * Handles the selection of an option and progresses to the next question.
   * 
   * @param {number} index - The index of the selected option.
   */
  const handleOptionPress = (index: number) => {
    setResult((prev) => [...prev, index + 1]);
    setIndexQuiz((prev) => prev + 1);
  };

  return (
    <StyledView className="flex flex-col items-center justify-center my-auto">
      {indexQuiz < quiz.length ? (
        <StyledView className="flex flex-col items-center justify-center">
          <StyledText className="text-xl font-semibold">
            {indexQuiz + 1} de {quiz.length} preguntas.
          </StyledText>
          <StyledView className="flex flex-col gap-6 p-10">
            <StyledText className="text-2xl font-bold text-justify">
              {indexQuiz + 1}. {quiz[indexQuiz]}
            </StyledText>
            <StyledView className="flex flex-col justify-center gap-5">
              {options.map((option, index) => (
                <TextButton
                  key={index}
                  buttonText={index + 1 + ". " + option}
                  onPress={() => handleOptionPress(index)}
                />
              ))}
            </StyledView>
          </StyledView>
        </StyledView>
      ) : (
        <StyledView>
          <StyledText className="mb-1 text-3xl font-bold">¡Encuesta finalizada! 🎉</StyledText>
          <TextButton buttonText={"Volver"} onPress={() => router.back()}></TextButton>
        </StyledView>
      )}
    </StyledView>
  );
}
