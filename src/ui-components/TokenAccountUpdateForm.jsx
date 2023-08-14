/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { TokenAccount, ImportantPerson as ImportantPerson0 } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function TokenAccountUpdateForm(props) {
  const {
    id: idProp,
    tokenAccount: tokenAccountModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    link: "",
    ImportantPerson: undefined,
  };
  const [link, setLink] = React.useState(initialValues.link);
  const [ImportantPerson, setImportantPerson] = React.useState(
    initialValues.ImportantPerson
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = tokenAccountRecord
      ? { ...initialValues, ...tokenAccountRecord, ImportantPerson }
      : initialValues;
    setLink(cleanValues.link);
    setImportantPerson(cleanValues.ImportantPerson);
    setCurrentImportantPersonValue(undefined);
    setCurrentImportantPersonDisplayValue("");
    setErrors({});
  };
  const [tokenAccountRecord, setTokenAccountRecord] = React.useState(
    tokenAccountModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(TokenAccount, idProp)
        : tokenAccountModelProp;
      setTokenAccountRecord(record);
      const ImportantPersonRecord = record
        ? await record.ImportantPerson
        : undefined;
      setImportantPerson(ImportantPersonRecord);
    };
    queryData();
  }, [idProp, tokenAccountModelProp]);
  React.useEffect(resetStateValues, [tokenAccountRecord, ImportantPerson]);
  const [
    currentImportantPersonDisplayValue,
    setCurrentImportantPersonDisplayValue,
  ] = React.useState("");
  const [currentImportantPersonValue, setCurrentImportantPersonValue] =
    React.useState(undefined);
  const ImportantPersonRef = React.createRef();
  const getIDValue = {
    ImportantPerson: (r) => JSON.stringify({ id: r?.id }),
  };
  const ImportantPersonIdSet = new Set(
    Array.isArray(ImportantPerson)
      ? ImportantPerson.map((r) => getIDValue.ImportantPerson?.(r))
      : getIDValue.ImportantPerson?.(ImportantPerson)
  );
  const importantPersonRecords = useDataStoreBinding({
    type: "collection",
    model: ImportantPerson0,
  }).items;
  const getDisplayValue = {
    ImportantPerson: (r) =>
      `${r?.first_name ? r?.first_name + " - " : ""}${r?.id}`,
  };
  const validations = {
    link: [],
    ImportantPerson: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          link,
          ImportantPerson,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            TokenAccount.copyOf(tokenAccountRecord, (updated) => {
              Object.assign(updated, modelFields);
              if (!modelFields.ImportantPerson) {
                updated.tokenAccountImportantPersonId = undefined;
              }
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TokenAccountUpdateForm")}
      {...rest}
    >
      <TextField
        label="Link"
        isRequired={false}
        isReadOnly={false}
        value={link}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              link: value,
              ImportantPerson,
            };
            const result = onChange(modelFields);
            value = result?.link ?? value;
          }
          if (errors.link?.hasError) {
            runValidationTasks("link", value);
          }
          setLink(value);
        }}
        onBlur={() => runValidationTasks("link", link)}
        errorMessage={errors.link?.errorMessage}
        hasError={errors.link?.hasError}
        {...getOverrideProps(overrides, "link")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              link,
              ImportantPerson: value,
            };
            const result = onChange(modelFields);
            value = result?.ImportantPerson ?? value;
          }
          setImportantPerson(value);
          setCurrentImportantPersonValue(undefined);
          setCurrentImportantPersonDisplayValue("");
        }}
        currentFieldValue={currentImportantPersonValue}
        label={"Important person"}
        items={ImportantPerson ? [ImportantPerson] : []}
        hasError={errors?.ImportantPerson?.hasError}
        errorMessage={errors?.ImportantPerson?.errorMessage}
        getBadgeText={getDisplayValue.ImportantPerson}
        setFieldValue={(model) => {
          setCurrentImportantPersonDisplayValue(
            model ? getDisplayValue.ImportantPerson(model) : ""
          );
          setCurrentImportantPersonValue(model);
        }}
        inputFieldRef={ImportantPersonRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Important person"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ImportantPerson"
          value={currentImportantPersonDisplayValue}
          options={importantPersonRecords
            .filter(
              (r) => !ImportantPersonIdSet.has(getIDValue.ImportantPerson?.(r))
            )
            .map((r) => ({
              id: getIDValue.ImportantPerson?.(r),
              label: getDisplayValue.ImportantPerson?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentImportantPersonValue(
              importantPersonRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentImportantPersonDisplayValue(label);
            runValidationTasks("ImportantPerson", label);
          }}
          onClear={() => {
            setCurrentImportantPersonDisplayValue("");
          }}
          defaultValue={ImportantPerson}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.ImportantPerson?.hasError) {
              runValidationTasks("ImportantPerson", value);
            }
            setCurrentImportantPersonDisplayValue(value);
            setCurrentImportantPersonValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "ImportantPerson",
              currentImportantPersonDisplayValue
            )
          }
          errorMessage={errors.ImportantPerson?.errorMessage}
          hasError={errors.ImportantPerson?.hasError}
          ref={ImportantPersonRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ImportantPerson")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || tokenAccountModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || tokenAccountModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
