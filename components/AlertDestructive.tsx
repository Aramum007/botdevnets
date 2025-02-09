import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BlurFade } from "./ui/blur-fade";

interface Props {
  decription: string;
}

export function AlertDestructive({ decription }: Props) {
  return (
    <BlurFade delay={0.2} inView>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Something went wrong.</AlertTitle>
        <AlertDescription>{decription}</AlertDescription>
      </Alert>
    </BlurFade>
  );
}
