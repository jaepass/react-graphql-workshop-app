import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles';
import ContentSection from './content-section';
import MarkDown from './md-content';

/**
 * Initiative Detail component renders the main content of a given initiative:
 * author, length, number of views, modules list, among other things.
 * It provides access to the first module of the initiative.
 */
const InitiativeDetail = ({ initiative }) => {
  const {
    name,
    description,
    image,
    organization
  } = initiative;

  return (
    <ContentSection>
      <CoverImage src={image} alt="" />
      <InitiativeDetails>
        <DetailRow>
          <h1>{name}</h1>
        </DetailRow>
        <DetailRow>
          <DetailItem>
            <h4>Initiative details</h4>
          </DetailItem>
          <DetailItem>
            <h4>Organization</h4>
            <OrganizationImage src={organization.image} />
            <OrganizationName>{organization.name}</OrganizationName>
          </DetailItem>
        </DetailRow>
      </InitiativeDetails>
      <MarkDown content={description} />
    </ContentSection>
  );
};

export default InitiativeDetail;

/** Initiative detail styled components */
const CoverImage = styled.img({
  objectFit: 'cover',
  maxHeight: 400,
  borderRadius: 4,
  marginBottom: 30,
});

const InitiativeDetails = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 20,
  borderRadius: 4,
  marginBottom: 30,
  border: `solid 1px ${colors.silver.dark}`,
  backgroundColor: colors.silver.lighter,
  h1: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 5,
  },
  h4: {
    fontSize: '1.2em',
    marginBottom: 5,
    color: colors.text,
  },
});

const DetailRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingBottom: 20,
  marginBottom: 20,
  borderBottom: `solid 1px ${colors.silver.dark}`,
});

const DetailItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: colors.textSecondary,
  alignSelf: 'center',
});

const OrganizationImage = styled.img({
  height: 30,
  width: 30,
  marginBottom: 8,
  borderRadius: '50%',
  objectFit: 'cover',
});

const OrganizationName = styled.div({
  lineHeight: '1em',
  fontSize: '1em',
});
