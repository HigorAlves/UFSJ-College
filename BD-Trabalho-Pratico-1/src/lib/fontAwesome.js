import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faSearch, faUsers, faWarehouse, faArchive, faBook, faBuilding, faMoneyBillAlt, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

library.add(faNewspaper, faSearch, faUsers, faWarehouse, faArchive, faBook, faBuilding, faMoneyBillAlt, faCodeBranch);

export const NEWSPAPER = () => <FontAwesomeIcon icon="newspaper" size={'3x'} color='#027ac6' />;
export const SEARCH = () => <FontAwesomeIcon icon="search" size={'1x'} />;
export const USERS = () => <FontAwesomeIcon icon="users" size={'3x'} color='#027ac6' />;
export const DEPARTAMENTO = () => <FontAwesomeIcon icon="warehouse" size={'3x'} color='#027ac6' />;
export const DOCUMENTO = () => <FontAwesomeIcon icon="book" size={'3x'} color='#027ac6' />;
export const AREA = () => <FontAwesomeIcon icon="code-branch" size={'3x'} color='#027ac6' />;
export const AGENCIA = () => <FontAwesomeIcon icon="building" size={'3x'} color='#027ac6' />;
export const RECURSOS = () => <FontAwesomeIcon icon="money-bill-alt" size={'3x'} color='#027ac6' />;
export const PUBLICACAO = () => <FontAwesomeIcon icon="newspaper" size={'3x'} color='#027ac6' />;