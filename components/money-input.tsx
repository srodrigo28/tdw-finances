import React, {forwardRef} from "react"
import { NumericFormat, NumericFormatProps } from "react-number-format" //v 5.4.2

type InputProps = React.InputHTMLAttributes<HTMLInputElement> // BUSCA NA NET
// https://github.com/shadcn-ui/ui/pull/2320

import { Input } from "@/components/ui/input"

export const MoneyInput = forwardRef(
    (
        props: NumericFormatProps<InputProps>,
        ref: React.ForwardedRef<HTMLInputElement>,
    ) => {
        return(
            <NumericFormat
            {...props}
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            allowNegative={false}
            customInput={Input}
            getInputRef={ref}
            />
        );
    }
);