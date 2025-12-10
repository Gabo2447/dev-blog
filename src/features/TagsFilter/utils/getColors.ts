import { AVAILABLE_TAGS } from "@features/TagsFilter/constants/Filters";
import { TagKey } from "@features/TagsFilter/types/filters";

interface Props {
  tag: TagKey;
}

type ColorClasses = [string, string];

/**
 * Función de utilidad para obtener las clases de color (inactiva y activa)
 * de un tag específico, usando la constante tipada AVAILABLE_TAGS.
 * * @param {Props} {tag} - La clave del tag ('web', 'frontend', etc.)
 * @returns {ColorClasses} - Un array de dos strings: [Clase Inactiva, Clase Activa]
 */
export const getColors = ({ tag }: Props): ColorClasses => {
  return AVAILABLE_TAGS[tag] as ColorClasses;
};
