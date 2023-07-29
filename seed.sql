--Company
INSERT INTO
    company (
        id,
        companyName,
        fantasyName,
        email,
        phone,
        streetAddress,
        city,
        state,
        zipCode,
        district
    )
VALUES
    (
        1,
        'Center Clínica',
        'Center Clínica',
        'contato@centerclinica.com',
        '(66) 3401-1308',
        'Avenida Governador Jaime Campos, N. 13',
        'Barra do Garças',
        'Mato Grosso',
        '78600-000',
        'Centro'
    );

-- Agreements
INSERT INTO
    agreement (id, name, discountType, discountValue, companyId)
VALUES
    (1, NULL, 'Particular', 'absolute', 0.00, 1);

-- Especialties
INSERT INTO
    specialty (id, name)
VALUES
    (1, 'Clínico geral');

-- Roles
INSERT INTO
    role (id, name)
VALUES
    (1, 'Médico');

INSERT INTO
    role (id, name)
VALUES
    (2, 'Paciente');

-- Doctor
INSERT INTO
    person (
        id,
        name,
        companyName,
        fantasyName,
        taxDocument,
        email,
        type,
        companyId
    )
VALUES
    (
        1,
        '',
        'João Miguel',
        'João Miguel',
        '35.458.177/0001-10',
        'joao.miguel.@email.com',
        'company',
        1
    );

INSERT INTO
    doctor (id, crm, personId)
VALUES
    (1, '3314', 1);

-- Patient
INSERT INTO
    person (
        id,
        name,
        companyName,
        fantasyName,
        taxDocument,
        email,
        type,
        gender,
        companyId
    )
VALUES
    (
        2,
        'Carlos Henrique',
        '',
        '',
        '054.698.569-50',
        'joao.miguel.@email.com',
        'individual',
        'male',
        1
    );

INSERT INTO
    patient (id, personId)
VALUES
    (1, 2);

-- Doctor role
INSERT INTO
    personRole (personId, roleId)
VALUES
    (1, 1);

-- Patient role
INSERT INTO
    personRole (personId, roleId)
VALUES
    (2, 2);

-- Procedures
INSERT INTO
    procedure (name, type, price, companyId, specialtyId)
VALUES
    ('Consulta', 'consultation', 400.0, 1, 1);