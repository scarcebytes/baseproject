/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Endorsement, ImportantPerson as ImportantPerson0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EndorsementUpdateFormInputValues = {
    ImportantPerson?: ImportantPerson0[];
};
export declare type EndorsementUpdateFormValidationValues = {
    ImportantPerson?: ValidationFunction<ImportantPerson0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EndorsementUpdateFormOverridesProps = {
    EndorsementUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ImportantPerson?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type EndorsementUpdateFormProps = React.PropsWithChildren<{
    overrides?: EndorsementUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    endorsement?: Endorsement;
    onSubmit?: (fields: EndorsementUpdateFormInputValues) => EndorsementUpdateFormInputValues;
    onSuccess?: (fields: EndorsementUpdateFormInputValues) => void;
    onError?: (fields: EndorsementUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EndorsementUpdateFormInputValues) => EndorsementUpdateFormInputValues;
    onValidate?: EndorsementUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EndorsementUpdateForm(props: EndorsementUpdateFormProps): React.ReactElement;
