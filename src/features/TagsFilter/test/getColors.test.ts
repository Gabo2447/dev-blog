// Asume que la función getColors está en './getColors'
import { getColors } from "../utils/getColors";
import { AVAILABLE_TAGS } from "@features/TagsFilter/constants/Filters";

describe("getColors", () => {
  // Test 1: Comprueba que la función devuelve las clases correctas para un tag específico (Web).
  test('debe devolver las clases de color correctas para el tag "web"', () => {
    const tagKey = "web";
    const expectedColors = AVAILABLE_TAGS.web; // Obtenemos el valor esperado directamente de la constante

    const result = getColors({ tag: tagKey });

    expect(result).toEqual(expectedColors);
  });

  // Test 2: Comprueba que la función devuelve las clases correctas para otro tag (Frontend).
  test('debe devolver las clases de color correctas para el tag "frontend"', () => {
    const tagKey = "frontend";
    const expectedColors = [
      "bg-cyan-100 text-cyan-600",
      "bg-cyan-600 text-cyan-100",
    ];

    const result = getColors({ tag: tagKey });

    expect(result).toEqual(expectedColors);
  });

  // Test 3: Comprueba que siempre devuelve exactamente dos clases (Inactiva y Activa).
  test("debe devolver un array con exactamente dos elementos (clase inactiva y activa)", () => {
    const tagKey = "git"; // Elegimos un tag cualquiera

    const result = getColors({ tag: tagKey });

    expect(result).toHaveLength(2);
    expect(typeof result[0]).toBe("string");
    expect(typeof result[1]).toBe("string");
  });

  test("debe usar la constante AVAILABLE_TAGS como fuente única de verdad", () => {
    const tagKey = "personal";

    const result = getColors({ tag: tagKey });
    expect(result).toBe(AVAILABLE_TAGS.personal);
  });
});
