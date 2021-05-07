import { Options } from 'sass';
interface ISassVarsConvertorOption {
  camelize?: boolean;
  sassOptions?: Options;
}
declare function sassVarsConvertor(
  cssTextContent: string,
  options?: ISassVarsConvertorOption | undefined
): Promise<Record<string, any>>;

export = sassVarsConvertor;
