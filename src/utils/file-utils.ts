import * as os from "os";
import * as path from "path";

export const expandHomePath = (targetPath: string): string => {
  if (targetPath === "~") {
    return os.homedir();
  }

  if (!targetPath.startsWith("~/")) {
    return targetPath;
  }

  return path.join(os.homedir(), targetPath.slice(2));
};
