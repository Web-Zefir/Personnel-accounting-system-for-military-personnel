export const ServiceType = {
  SROCHNIK: 'SROCHNIK', // Срочная служба
  CONTRACT: 'CONTRACT',   // Контракт
} as const

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

export const RankCategory = {
  SROCHNIK: 'SROCHNIK',       
  SOLDAT: 'SOLDAT',           
  SERGEANT: 'SERGEANT',         
  PRAPOR: 'PRAPOR',   
  OFFICER: 'OFFICER',           
  GENERAL: 'GENERAL',           
} as const

export type RankCategory = (typeof RankCategory)[keyof typeof RankCategory];

export const MilitaryRank = {
  RYADOVOY: 'ряд.',
  EFREYTOR: 'ефр.',

  ML_SERGEANT: 'мл. с-т',
  SERGEANT: 'с-т',
  ST_SERGEANT: 'ст. с-т',
  STARSHINYA: 'с-на',

  PRAPOR: 'пр-к',
  ST_PRAPOR: 'ст. пр-к',

  ML_LIEUTENANT: 'мл. л-т',
  LIEUTENANT: 'л-т',
  ST_LIEUTENANT: 'ст. л-т',
  CAPTAIN: 'к-н',
  MAJOR: 'м-р',
  PODPOL: 'п/п-к',
  POLKOVNIK: 'п-к',

  GEN_MR: 'г-л. м-р',
  GEN_LT: 'г-л. л-т',
  GEN_PK: 'г-л. п-к',
  GEN_ARMY: 'г-л. а-р',
} as const

export type MilitaryRank = (typeof MilitaryRank)[keyof typeof MilitaryRank];

export const MilitaryStatus = {
  PPD: 'ППД',               
  VACATION: 'Отпуск',       
  HOSPITAL: 'Госпиталь',   
  DUTY: 'Наряд / Дежурство',
  BUSINESS_TRIP: 'Командировка',
  OTHER: 'Отсутствует',
} as const

export type MilitaryStatus = (typeof MilitaryStatus)[keyof typeof MilitaryStatus];

export interface Personnel {
  uuid: string;                     // Уникальный ключ (UUIDv4)
  personalNumber: string;           // Личный номер (например: "Ф-123456" или "BB-654321")
  fullName: string;                 // ФИО
  rank: MilitaryRank;               // Воинкое звание 
  staffRank: MilitaryRank;          // Штатное звание 
  category: RankCategory;           // Категория (для цвета)
  serviceType: ServiceType;         // Срочник / Контрактник
  
  // Штатно-должностной учёт
  podr: string;                     // Подразделение (например: "2 реабатр")
  position: string;                 // Сокращённая должность (например: "КО / КМ")
  fullPositionName: string;         // Полное наименование (например: "Командир отделения — командир боевой машины")
  vuso?: string;                    // ВУС (например: "100915Д")
  tariffCategory?: number;          // Тарифный разряд (1, 2, 3...)
  isOverState?: boolean;            // Находится ли за штатом (в распоряжении)

  // Контракт и служба
  birthDate: string;                // Дата рождения (DD.MM.YYYY) - 05.10.1984
  enlistmentDate: string;           // Дата призыва / контракта
  enlistmentDateNew?: string;       // Дата нового контракта (только у контрактников, которые продлили контракт)
  dischargeDate?: string;           // Дата окончания контракта
  dischargeReason?: string;         // Причина увольнения (например: "по окончании контракта")
  contractNumber?: string;          // Номер контракта/приказа о зачислении
  calendarServiceYears?: number;    // Календарная выслуга (дата начала - сегодняшняя дата)
  preferentialServiceYears?: number;// Льготная выслуга (1 месяц за 3 месяца - боевые действия, 1 месяц за 2 месяца - служба в районах Крайнего Севера и т.п., прыжки с парашютом, служба в ВДВ (1 месяц за 1.5) и т.д.)
  totalServiceYears?: number;       // Общая выслуга (календарная + льготная)

  // Детализация текущего статуса / отсутствия
  status: MilitaryStatus;           // Местонахождение (ППД, Отпуск и т.д.)
  statusStartDate?: string;         // Дата начала периода (отпуск/госпиталь/командировка)
  statusEndDate?: string;           // Дата окончания периода
  statusDaysCount?: number;         // Количество дней отсутствия
  statusReason?: string;            // Номер приказа / основание (например: "Приказ КЧ № 123 от 01.01.2023 г.")
  destinationPlace?: string;        // Место проведения отпуска / командировки / наименование госпиталя

  // Персональные и контактные данные
  phoneNumber?: string;             // Номер телефона
  identityDocument?: string;        // Удостоверение личности / Военный билет (например: "Военный билет АС № 85726284")
  relativesInfo?: string;           // Информация о родственниках и телефон для связи
  homeAddress?: string;             // Адрес проживания / регистрации

  note?: string;                    // Примечание / дополнительная инфа
}