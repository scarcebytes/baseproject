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
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import {
  Endorsement,
  ImportantPerson as ImportantPerson0,
  EndorsementImportantPerson,
} from "../models";
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
export default function EndorsementUpdateForm(props) {
  const {
    id: idProp,
    endorsement: endorsementModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ImportantPerson: [],
  };
  const [ImportantPerson, setImportantPerson] = React.useState(
    initialValues.ImportantPerson
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = endorsementRecord
      ? {
          ...initialValues,
          ...endorsementRecord,
          ImportantPerson: linkedImportantPerson,
        }
      : initialValues;
    setImportantPerson(cleanValues.ImportantPerson ?? []);
    setCurrentImportantPersonValue(undefined);
    setCurrentImportantPersonDisplayValue("");
    setErrors({});
  };
  const [endorsementRecord, setEndorsementRecord] =
    React.useState(endorsementModelProp);
  const [linkedImportantPerson, setLinkedImportantPerson] = React.useState([]);
  const canUnlinkImportantPerson = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Endorsement, idProp)
        : endorsementModelProp;
      setEndorsementRecord(record);
      const linkedImportantPerson = record
        ? await Promise.all(
            (
              await record.ImportantPerson.toArray()
            ).map((r) => {
              return r.importantPerson;
            })
          )
        : [];
      setLinkedImportantPerson(linkedImportantPerson);
    };
    queryData();
  }, [idProp, endorsementModelProp]);
  React.useEffect(resetStateValues, [endorsementRecord, linkedImportantPerson]);
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
          const promises = [];
          const importantPersonToLinkMap = new Map();
          const importantPersonToUnLinkMap = new Map();
          const importantPersonMap = new Map();
          const linkedImportantPersonMap = new Map();
          ImportantPerson.forEach((r) => {
            const count = importantPersonMap.get(
              getIDValue.ImportantPerson?.(r)
            );
            const newCount = count ? count + 1 : 1;
            importantPersonMap.set(getIDValue.ImportantPerson?.(r), newCount);
          });
          linkedImportantPerson.forEach((r) => {
            const count = linkedImportantPersonMap.get(
              getIDValue.ImportantPerson?.(r)
            );
            const newCount = count ? count + 1 : 1;
            linkedImportantPersonMap.set(
              getIDValue.ImportantPerson?.(r),
              newCount
            );
          });
          linkedImportantPersonMap.forEach((count, id) => {
            const newCount = importantPersonMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                importantPersonToUnLinkMap.set(id, diffCount);
              }
            } else {
              importantPersonToUnLinkMap.set(id, count);
            }
          });
          importantPersonMap.forEach((count, id) => {
            const originalCount = linkedImportantPersonMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                importantPersonToLinkMap.set(id, diffCount);
              }
            } else {
              importantPersonToLinkMap.set(id, count);
            }
          });
          importantPersonToUnLinkMap.forEach(async (count, id) => {
            const endorsementImportantPersonRecords = await DataStore.query(
              EndorsementImportantPerson,
              (r) =>
                r.and((r) => {
                  const recordKeys = JSON.parse(id);
                  return [
                    r.importantPersonId.eq(recordKeys.id),
                    r.endorsementId.eq(endorsementRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(
                DataStore.delete(endorsementImportantPersonRecords[i])
              );
            }
          });
          importantPersonToLinkMap.forEach((count, id) => {
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new EndorsementImportantPerson({
                    endorsement: endorsementRecord,
                    importantPerson: importantPersonRecords.find((r) =>
                      Object.entries(JSON.parse(id)).every(
                        ([key, value]) => r[key] === value
                      )
                    ),
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {};
          promises.push(
            DataStore.save(
              Endorsement.copyOf(endorsementRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EndorsementUpdateForm")}
      {...rest}
    >
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              ImportantPerson: values,
            };
            const result = onChange(modelFields);
            values = result?.ImportantPerson ?? values;
          }
          setImportantPerson(values);
          setCurrentImportantPersonValue(undefined);
          setCurrentImportantPersonDisplayValue("");
        }}
        currentFieldValue={currentImportantPersonValue}
        label={"Important person"}
        items={ImportantPerson}
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
          isDisabled={!(idProp || endorsementModelProp)}
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
              !(idProp || endorsementModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}