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
import {
  ImportantPerson,
  Endorsement,
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
export default function ImportantPersonUpdateForm(props) {
  const {
    id: idProp,
    importantPerson: importantPersonModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    first_name: "",
    last_name: "",
    endorsements: [],
  };
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [endorsements, setEndorsements] = React.useState(
    initialValues.endorsements
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = importantPersonRecord
      ? {
          ...initialValues,
          ...importantPersonRecord,
          endorsements: linkedEndorsements,
        }
      : initialValues;
    setFirst_name(cleanValues.first_name);
    setLast_name(cleanValues.last_name);
    setEndorsements(cleanValues.endorsements ?? []);
    setCurrentEndorsementsValue(undefined);
    setCurrentEndorsementsDisplayValue("");
    setErrors({});
  };
  const [importantPersonRecord, setImportantPersonRecord] = React.useState(
    importantPersonModelProp
  );
  const [linkedEndorsements, setLinkedEndorsements] = React.useState([]);
  const canUnlinkEndorsements = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ImportantPerson, idProp)
        : importantPersonModelProp;
      setImportantPersonRecord(record);
      const linkedEndorsements = record
        ? await Promise.all(
            (
              await record.endorsements.toArray()
            ).map((r) => {
              return r.endorsement;
            })
          )
        : [];
      setLinkedEndorsements(linkedEndorsements);
    };
    queryData();
  }, [idProp, importantPersonModelProp]);
  React.useEffect(resetStateValues, [
    importantPersonRecord,
    linkedEndorsements,
  ]);
  const [currentEndorsementsDisplayValue, setCurrentEndorsementsDisplayValue] =
    React.useState("");
  const [currentEndorsementsValue, setCurrentEndorsementsValue] =
    React.useState(undefined);
  const endorsementsRef = React.createRef();
  const getIDValue = {
    endorsements: (r) => JSON.stringify({ id: r?.id }),
  };
  const endorsementsIdSet = new Set(
    Array.isArray(endorsements)
      ? endorsements.map((r) => getIDValue.endorsements?.(r))
      : getIDValue.endorsements?.(endorsements)
  );
  const endorsementRecords = useDataStoreBinding({
    type: "collection",
    model: Endorsement,
  }).items;
  const getDisplayValue = {
    endorsements: (r) => r?.id,
  };
  const validations = {
    first_name: [],
    last_name: [],
    endorsements: [],
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
          first_name,
          last_name,
          endorsements,
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
          const endorsementsToLinkMap = new Map();
          const endorsementsToUnLinkMap = new Map();
          const endorsementsMap = new Map();
          const linkedEndorsementsMap = new Map();
          endorsements.forEach((r) => {
            const count = endorsementsMap.get(getIDValue.endorsements?.(r));
            const newCount = count ? count + 1 : 1;
            endorsementsMap.set(getIDValue.endorsements?.(r), newCount);
          });
          linkedEndorsements.forEach((r) => {
            const count = linkedEndorsementsMap.get(
              getIDValue.endorsements?.(r)
            );
            const newCount = count ? count + 1 : 1;
            linkedEndorsementsMap.set(getIDValue.endorsements?.(r), newCount);
          });
          linkedEndorsementsMap.forEach((count, id) => {
            const newCount = endorsementsMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                endorsementsToUnLinkMap.set(id, diffCount);
              }
            } else {
              endorsementsToUnLinkMap.set(id, count);
            }
          });
          endorsementsMap.forEach((count, id) => {
            const originalCount = linkedEndorsementsMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                endorsementsToLinkMap.set(id, diffCount);
              }
            } else {
              endorsementsToLinkMap.set(id, count);
            }
          });
          endorsementsToUnLinkMap.forEach(async (count, id) => {
            const endorsementImportantPersonRecords = await DataStore.query(
              EndorsementImportantPerson,
              (r) =>
                r.and((r) => {
                  const recordKeys = JSON.parse(id);
                  return [
                    r.endorsementId.eq(recordKeys.id),
                    r.importantPersonId.eq(importantPersonRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(
                DataStore.delete(endorsementImportantPersonRecords[i])
              );
            }
          });
          endorsementsToLinkMap.forEach((count, id) => {
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new EndorsementImportantPerson({
                    importantPerson: importantPersonRecord,
                    endorsement: endorsementRecords.find((r) =>
                      Object.entries(JSON.parse(id)).every(
                        ([key, value]) => r[key] === value
                      )
                    ),
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {
            first_name: modelFields.first_name,
            last_name: modelFields.last_name,
          };
          promises.push(
            DataStore.save(
              ImportantPerson.copyOf(importantPersonRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ImportantPersonUpdateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name: value,
              last_name,
              endorsements,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={last_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name: value,
              endorsements,
            };
            const result = onChange(modelFields);
            value = result?.last_name ?? value;
          }
          if (errors.last_name?.hasError) {
            runValidationTasks("last_name", value);
          }
          setLast_name(value);
        }}
        onBlur={() => runValidationTasks("last_name", last_name)}
        errorMessage={errors.last_name?.errorMessage}
        hasError={errors.last_name?.hasError}
        {...getOverrideProps(overrides, "last_name")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              endorsements: values,
            };
            const result = onChange(modelFields);
            values = result?.endorsements ?? values;
          }
          setEndorsements(values);
          setCurrentEndorsementsValue(undefined);
          setCurrentEndorsementsDisplayValue("");
        }}
        currentFieldValue={currentEndorsementsValue}
        label={"Endorsements"}
        items={endorsements}
        hasError={errors?.endorsements?.hasError}
        errorMessage={errors?.endorsements?.errorMessage}
        getBadgeText={getDisplayValue.endorsements}
        setFieldValue={(model) => {
          setCurrentEndorsementsDisplayValue(
            model ? getDisplayValue.endorsements(model) : ""
          );
          setCurrentEndorsementsValue(model);
        }}
        inputFieldRef={endorsementsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Endorsements"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Endorsement"
          value={currentEndorsementsDisplayValue}
          options={endorsementRecords
            .filter((r) => !endorsementsIdSet.has(getIDValue.endorsements?.(r)))
            .map((r) => ({
              id: getIDValue.endorsements?.(r),
              label: getDisplayValue.endorsements?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentEndorsementsValue(
              endorsementRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentEndorsementsDisplayValue(label);
            runValidationTasks("endorsements", label);
          }}
          onClear={() => {
            setCurrentEndorsementsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.endorsements?.hasError) {
              runValidationTasks("endorsements", value);
            }
            setCurrentEndorsementsDisplayValue(value);
            setCurrentEndorsementsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("endorsements", currentEndorsementsDisplayValue)
          }
          errorMessage={errors.endorsements?.errorMessage}
          hasError={errors.endorsements?.hasError}
          ref={endorsementsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "endorsements")}
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
          isDisabled={!(idProp || importantPersonModelProp)}
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
              !(idProp || importantPersonModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
