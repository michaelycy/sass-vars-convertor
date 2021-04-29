import { Options } from 'sass';
interface ISassVarsConvertorOption {
  camelize?: boolean;
  sassOptions?: Options;
}
declare const _default: (
  cssTextContent: string,
  options?: ISassVarsConvertorOption | undefined
) => Promise<Record<string, any>>;

export default _default;
