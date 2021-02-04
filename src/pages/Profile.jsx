import React from 'react';
import { Box, Input } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    RadioGroup,
    HStack,
    Radio
} from "@chakra-ui/react";
import { Formik, Form, Field } from 'formik'
import axios from 'axios';


function Profile() {

    return (
        <Box>
            <Box fontFamily='Poppins-black' fontSize="1.3em" padding="15% 5% 3% 5%"
                lineHeight="120%" color="#4BD1BE" textAlign="left">
                Ajouter un évènement
            </Box>

            <Formik
                initialValues={{
                    name: "",
                    description: "",
                    address: "",
                    duration: "",
                    charity_id: 1,
                    charity_name: "",
                    category: ""
                }}
                onSubmit={(values) => {
                    axios.post(`http://localhost:5000/events`,
                        { values })
                }}
            >
                {(props) => (
                    <Form>
                        <Field name="name">
                            {({ field, form }) => (
                                <>
                                    <FormLabel htmlFor="name">Titre de l'évènement</FormLabel>
                                    <Input {...field} id="name" placeholder="nom" />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </>
                            )}
                        </Field>
                        <Field name="description">
                            {({ field, form }) => (
                                <>
                                    <FormLabel htmlFor="description">Description de l'évènement</FormLabel>
                                    <Input {...field} id="description" placeholder="description" />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </>
                            )}
                        </Field>
                        <Field name="address">
                            {({ field, form }) => (
                                <>
                                    <FormLabel htmlFor="address">Adresse de l'évènement</FormLabel>
                                    <Input {...field} id="address" placeholder="adresse" />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </>
                            )}
                        </Field>
                        <Field name="duration">
                            {({ field, form }) => (
                                <>
                                    <FormLabel htmlFor="duration">Durée de l'évènement</FormLabel>
                                    <Input {...field} id="duration" placeholder="durée" />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </>
                            )}
                        </Field>
                        <Field name="charity_name">
                            {({ field, form }) => (
                                <>
                                    <FormLabel htmlFor="charity_name">Nom de l'association</FormLabel>
                                    <Input {...field} id="charity_name" placeholder="nom de l'association" />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </>
                            )}
                        </Field>
                        <Field name="image">
                            {({ field, form }) => (
                                <>
                                    <FormLabel htmlFor="image">Image</FormLabel>
                                    <Input {...field} id="image" placeholder="image" />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </>
                            )}
                        </Field>
                        <Field name="date">
                            {({ field, form }) => (
                                <>
                                    <FormLabel htmlFor="image">Date de l'évènement</FormLabel>
                                    <Input {...field} id="date" placeholder="date" />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </>
                            )}
                        </Field>
                        <FormControl as="fieldset">
                            <FormLabel as="legend">Choirir la catégorie de l'évènement</FormLabel>
                            <RadioGroup>
                                <HStack spacing="24px" display="flex" flexWrap="wrap">
                                    <Radio value="category">Personnes âgées</Radio>
                                    <Radio value="category">Éducation</Radio>
                                    <Radio value="category">Handicap</Radio>
                                    <Radio value="category">Sans abris</Radio>
                                </HStack>
                            </RadioGroup>
                            <FormHelperText>Choisir une seule catégorie</FormHelperText>
                        </FormControl>

                        <Box as="button"
                            mt={4}
                            colorScheme="teal"
                            isLoading={props.isSubmitting}
                            type="submit"
                        >
                            Submit
                        </Box>
                    </Form>
                )}
            </Formik>

        </Box>
    )

}

export default Profile;