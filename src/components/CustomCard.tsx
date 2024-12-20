import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  titleClassName?: string;
  titleConditionalStyles?: Record<string, boolean>;
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

export function CustomCard(props: Props) {
  return (
    <Card className={cn("border-none bg-[#1D1D1D] p-3", props.className)}>
      <CardHeader className="p-0">
        <div className="flex gap-2">
          {props.icon}
          <CardTitle
            className={cn(
              "text-sm font-normal",
              props.titleClassName,
              props.titleConditionalStyles,
            )}
          >
            {props.title}
          </CardTitle>
        </div>
      </CardHeader>
      {props.children && (
        <CardContent className="p-0 pt-3">{props.children}</CardContent>
      )}
    </Card>
  );
}
