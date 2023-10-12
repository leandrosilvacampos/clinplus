-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: clinplus
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accessProfile`
--

DROP TABLE IF EXISTS `accessProfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accessProfile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accessProfile`
--

LOCK TABLES `accessProfile` WRITE;
/*!40000 ALTER TABLE `accessProfile` DISABLE KEYS */;
INSERT INTO `accessProfile` VALUES (1,'2023-08-26 13:00:43.156155','2023-08-26 13:02:52.199216',NULL,'Médico'),(2,'2023-08-26 13:02:52.191151','2023-08-26 13:02:52.191151',NULL,'Paciente');
/*!40000 ALTER TABLE `accessProfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `agreement`
--

DROP TABLE IF EXISTS `agreement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agreement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `discountType` enum('absolute','percentage') NOT NULL,
  `discountValue` decimal(10,2) NOT NULL,
  `companyId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_79ebd1efb9bc3703cc4f1c45e97` (`companyId`),
  CONSTRAINT `FK_79ebd1efb9bc3703cc4f1c45e97` FOREIGN KEY (`companyId`) REFERENCES `company` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agreement`
--

LOCK TABLES `agreement` WRITE;
/*!40000 ALTER TABLE `agreement` DISABLE KEYS */;
INSERT INTO `agreement` VALUES (1,'2023-07-29 19:53:11.517984','2023-07-29 19:53:11.517984',NULL,'Particular','absolute',0.00,1);
/*!40000 ALTER TABLE `agreement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `companyName` varchar(255) NOT NULL,
  `fantasyName` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `cellPhone` varchar(255) DEFAULT NULL,
  `streetAddress` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `zipCode` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `parentCompanyId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_aa8f384a989014b9f826b7fdc5e` (`parentCompanyId`),
  CONSTRAINT `FK_aa8f384a989014b9f826b7fdc5e` FOREIGN KEY (`parentCompanyId`) REFERENCES `company` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'2023-07-29 19:18:59.832603','2023-07-29 19:18:59.832603',NULL,'Center Clínica','Center Clínica','contato@centerclinica.com','(66) 3401-1308',NULL,'Avenida Governador Jaime Campos, N. 13','Barra do Garças','Mato Grosso','78600-000','Centro',NULL);
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companyPaymentMethod`
--

DROP TABLE IF EXISTS `companyPaymentMethod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companyPaymentMethod` (
  `companyId` int NOT NULL,
  `paymentMethodId` int NOT NULL,
  PRIMARY KEY (`companyId`,`paymentMethodId`),
  KEY `IDX_d31a5387afe5bf9b4a5720348d` (`companyId`),
  KEY `IDX_097bc1211d6a51fb3946e2d862` (`paymentMethodId`),
  CONSTRAINT `FK_097bc1211d6a51fb3946e2d8624` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentMethod` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_d31a5387afe5bf9b4a5720348da` FOREIGN KEY (`companyId`) REFERENCES `company` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companyPaymentMethod`
--

LOCK TABLES `companyPaymentMethod` WRITE;
/*!40000 ALTER TABLE `companyPaymentMethod` DISABLE KEYS */;
INSERT INTO `companyPaymentMethod` VALUES (1,1),(1,2),(1,3);
/*!40000 ALTER TABLE `companyPaymentMethod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `crm` varchar(255) NOT NULL,
  `personId` int DEFAULT NULL,
  `specialtyId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_b3bf0f0e117a4062b5fcad2187` (`personId`),
  KEY `FK_c9370caf53ab2b7f32ba170f2ad` (`specialtyId`),
  CONSTRAINT `FK_b3bf0f0e117a4062b5fcad2187f` FOREIGN KEY (`personId`) REFERENCES `person` (`id`),
  CONSTRAINT `FK_c9370caf53ab2b7f32ba170f2ad` FOREIGN KEY (`specialtyId`) REFERENCES `specialty` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (1,'2023-07-29 19:13:03.905263','2023-10-07 18:40:14.025830',NULL,'3314',1,1);
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `examModality`
--

DROP TABLE IF EXISTS `examModality`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examModality` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examModality`
--

LOCK TABLES `examModality` WRITE;
/*!40000 ALTER TABLE `examModality` DISABLE KEYS */;
/*!40000 ALTER TABLE `examModality` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `observations` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `personId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_deb8aff3b1418adb00dbf55f6f` (`personId`),
  CONSTRAINT `FK_deb8aff3b1418adb00dbf55f6f0` FOREIGN KEY (`personId`) REFERENCES `person` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'2023-08-12 13:22:18.860428','2023-08-26 13:01:57.664553',NULL,'',2);
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentMethod`
--

DROP TABLE IF EXISTS `paymentMethod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymentMethod` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentMethod`
--

LOCK TABLES `paymentMethod` WRITE;
/*!40000 ALTER TABLE `paymentMethod` DISABLE KEYS */;
INSERT INTO `paymentMethod` VALUES (1,'2023-08-05 12:44:35.531748','2023-08-05 12:44:35.531748',NULL,'Dinheiro'),(2,'2023-08-05 12:44:35.542519','2023-08-05 12:44:35.542519',NULL,'Cartão de crédito'),(3,'2023-08-05 12:44:35.549694','2023-08-05 12:44:35.549694',NULL,'Cartão de débito');
/*!40000 ALTER TABLE `paymentMethod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission`
--

DROP TABLE IF EXISTS `permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permission` (
  `accessProfileId` int NOT NULL,
  `systemFeatureId` int NOT NULL,
  PRIMARY KEY (`accessProfileId`,`systemFeatureId`),
  KEY `IDX_7056c14a30a4c3f4af635b7202` (`accessProfileId`),
  KEY `IDX_7e180c72fb5c8aeeb467cddbbb` (`systemFeatureId`),
  CONSTRAINT `FK_7056c14a30a4c3f4af635b72021` FOREIGN KEY (`accessProfileId`) REFERENCES `accessProfile` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_7e180c72fb5c8aeeb467cddbbb8` FOREIGN KEY (`systemFeatureId`) REFERENCES `systemFeature` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission`
--

LOCK TABLES `permission` WRITE;
/*!40000 ALTER TABLE `permission` DISABLE KEYS */;
INSERT INTO `permission` VALUES (2,1),(2,2),(2,3),(2,4),(2,5),(2,6),(2,7);
/*!40000 ALTER TABLE `permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `person` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `companyName` varchar(255) DEFAULT NULL,
  `fantasyName` varchar(255) DEFAULT NULL,
  `taxDocument` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cellPhone` varchar(255) DEFAULT NULL,
  `streetAddress` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zipCode` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `type` enum('individual','company') NOT NULL,
  `gender` enum('male','female','other') DEFAULT NULL,
  `dateOfBirth` date DEFAULT NULL,
  `companyId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ee066ddacfce46c9a7cb90edd1a` (`companyId`),
  CONSTRAINT `FK_ee066ddacfce46c9a7cb90edd1a` FOREIGN KEY (`companyId`) REFERENCES `company` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES (1,'2023-07-29 19:05:30.225525','2023-08-12 13:20:21.292093',NULL,'','João Miguel','João Miguel','35.458.177/0001-10','joao.miguel@email.com',NULL,NULL,NULL,NULL,NULL,NULL,'company',NULL,NULL,1),(2,'2023-08-12 13:20:21.283132','2023-08-26 13:48:03.543102',NULL,'João Campos',NULL,NULL,'487.545.961-50','joao.campos@email.com',NULL,NULL,NULL,NULL,NULL,NULL,'individual','male','1994-03-01',1);
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personRole`
--

DROP TABLE IF EXISTS `personRole`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personRole` (
  `personId` int NOT NULL,
  `roleId` int NOT NULL,
  PRIMARY KEY (`personId`,`roleId`),
  KEY `IDX_78b2e1daa8973a01498bd1df40` (`personId`),
  KEY `IDX_d0b18534dc710794e3f8dad750` (`roleId`),
  CONSTRAINT `FK_78b2e1daa8973a01498bd1df407` FOREIGN KEY (`personId`) REFERENCES `person` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_d0b18534dc710794e3f8dad7506` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personRole`
--

LOCK TABLES `personRole` WRITE;
/*!40000 ALTER TABLE `personRole` DISABLE KEYS */;
INSERT INTO `personRole` VALUES (1,1),(2,2);
/*!40000 ALTER TABLE `personRole` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `procedure`
--

DROP TABLE IF EXISTS `procedure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `procedure` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `durationTimeUnit` enum('minutes','hours') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `type` enum('consultation','exam') NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `companyId` int DEFAULT NULL,
  `examModalityId` int DEFAULT NULL,
  `durationTime` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_8f9a35d9eb49151313a6030676a` (`companyId`),
  KEY `FK_79189c9b29c180ac96d48188716` (`examModalityId`),
  CONSTRAINT `FK_79189c9b29c180ac96d48188716` FOREIGN KEY (`examModalityId`) REFERENCES `examModality` (`id`),
  CONSTRAINT `FK_8f9a35d9eb49151313a6030676a` FOREIGN KEY (`companyId`) REFERENCES `company` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `procedure`
--

LOCK TABLES `procedure` WRITE;
/*!40000 ALTER TABLE `procedure` DISABLE KEYS */;
INSERT INTO `procedure` VALUES (1,'2023-08-26 13:00:08.433536','2023-08-26 13:00:08.433536',NULL,'Consulta','minutes','consultation',400.00,1,NULL,30);
/*!40000 ALTER TABLE `procedure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'2023-07-29 19:06:47.295724','2023-07-29 19:06:47.295724',NULL,'Médico'),(2,'2023-07-29 19:06:47.304128','2023-07-29 19:06:47.304128',NULL,'Paciente');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedulePaymentMethod`
--

DROP TABLE IF EXISTS `schedulePaymentMethod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedulePaymentMethod` (
  `paymentMethodId` int NOT NULL,
  `schedulingId` int NOT NULL,
  PRIMARY KEY (`paymentMethodId`,`schedulingId`),
  KEY `IDX_0f0ee971b92fc7cf8786b65bd3` (`paymentMethodId`),
  KEY `IDX_9651add38aba7df464cfe58af3` (`schedulingId`),
  CONSTRAINT `FK_0f0ee971b92fc7cf8786b65bd33` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentMethod` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_9651add38aba7df464cfe58af3d` FOREIGN KEY (`schedulingId`) REFERENCES `scheduling` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedulePaymentMethod`
--

LOCK TABLES `schedulePaymentMethod` WRITE;
/*!40000 ALTER TABLE `schedulePaymentMethod` DISABLE KEYS */;
INSERT INTO `schedulePaymentMethod` VALUES (1,1);
/*!40000 ALTER TABLE `schedulePaymentMethod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scheduling`
--

DROP TABLE IF EXISTS `scheduling`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scheduling` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `agreementId` int DEFAULT NULL,
  `companyId` int DEFAULT NULL,
  `doctorId` int DEFAULT NULL,
  `patientId` int DEFAULT NULL,
  `status` enum('scheduled','completed','canceled') NOT NULL DEFAULT 'scheduled',
  PRIMARY KEY (`id`),
  KEY `FK_3f36b4404906b569a8546027d84` (`agreementId`),
  KEY `FK_f7c16c5009212e762f2df076779` (`companyId`),
  KEY `FK_661c10c48190af50892afff2c87` (`doctorId`),
  KEY `FK_95c99eef84baad1e5c7fe58cbe7` (`patientId`),
  CONSTRAINT `FK_3f36b4404906b569a8546027d84` FOREIGN KEY (`agreementId`) REFERENCES `agreement` (`id`),
  CONSTRAINT `FK_661c10c48190af50892afff2c87` FOREIGN KEY (`doctorId`) REFERENCES `doctor` (`id`),
  CONSTRAINT `FK_95c99eef84baad1e5c7fe58cbe7` FOREIGN KEY (`patientId`) REFERENCES `patient` (`id`),
  CONSTRAINT `FK_f7c16c5009212e762f2df076779` FOREIGN KEY (`companyId`) REFERENCES `company` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scheduling`
--

LOCK TABLES `scheduling` WRITE;
/*!40000 ALTER TABLE `scheduling` DISABLE KEYS */;
INSERT INTO `scheduling` VALUES (1,'2023-10-12 14:00:19.209854','2023-10-12 14:00:19.209854',NULL,'2023-11-09 12:45:00','2023-11-09 13:15:00',1,1,1,1,'scheduled');
/*!40000 ALTER TABLE `scheduling` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedulingProcedure`
--

DROP TABLE IF EXISTS `schedulingProcedure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedulingProcedure` (
  `schedulingId` int NOT NULL,
  `procedureId` int NOT NULL,
  PRIMARY KEY (`schedulingId`,`procedureId`),
  KEY `IDX_76d574ccd53a872029678e5e81` (`schedulingId`),
  KEY `IDX_fd174311a2587a02b63aa8a2c8` (`procedureId`),
  CONSTRAINT `FK_76d574ccd53a872029678e5e819` FOREIGN KEY (`schedulingId`) REFERENCES `scheduling` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_fd174311a2587a02b63aa8a2c84` FOREIGN KEY (`procedureId`) REFERENCES `procedure` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedulingProcedure`
--

LOCK TABLES `schedulingProcedure` WRITE;
/*!40000 ALTER TABLE `schedulingProcedure` DISABLE KEYS */;
INSERT INTO `schedulingProcedure` VALUES (1,1);
/*!40000 ALTER TABLE `schedulingProcedure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specialty`
--

DROP TABLE IF EXISTS `specialty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `specialty` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialty`
--

LOCK TABLES `specialty` WRITE;
/*!40000 ALTER TABLE `specialty` DISABLE KEYS */;
INSERT INTO `specialty` VALUES (1,'2023-07-29 19:21:55.675838','2023-07-29 19:21:55.675838',NULL,'Clínico geral',NULL);
/*!40000 ALTER TABLE `specialty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `systemFeature`
--

DROP TABLE IF EXISTS `systemFeature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `systemFeature` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `route` varchar(255) NOT NULL,
  `httpVerb` enum('GET','POST','PUT','DELETE') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `systemFeature`
--

LOCK TABLES `systemFeature` WRITE;
/*!40000 ALTER TABLE `systemFeature` DISABLE KEYS */;
INSERT INTO `systemFeature` VALUES (1,'2023-10-12 13:24:06.554591','2023-10-12 13:24:06.554591',NULL,'Criar agendamento','/companies/:companyId/schedules','POST'),(2,'2023-10-12 13:24:06.565963','2023-10-12 13:24:06.565963',NULL,'Consultar métodos de pagamento','/companies/:companyId/payment-methods','GET'),(3,'2023-10-12 13:24:06.576032','2023-10-12 13:24:06.576032',NULL,'Consultar convênios','/companies/:companyId/agreements','GET'),(4,'2023-10-12 13:24:06.584968','2023-10-12 13:24:06.584968',NULL,'Consultar horários disponíveis','/companies/:id/available-hours','GET'),(5,'2023-10-12 13:24:06.599553','2023-10-12 13:24:06.599553',NULL,'Consultar especialidades ','/companies/:id/available-specialties','GET'),(6,'2023-10-12 13:24:06.609117','2023-10-12 13:51:27.094070',NULL,'Consultar empresas','/companies','GET'),(7,'2023-10-12 13:51:27.085608','2023-10-12 13:51:27.085608',NULL,'Consultar agendamentos','/users/schedules','GET');
/*!40000 ALTER TABLE `systemFeature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `personId` int DEFAULT NULL,
  `accessProfileId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_6aac19005cea8e2119cbe7759e` (`personId`),
  KEY `FK_5a2922ec9809f3f794c9924ae9a` (`accessProfileId`),
  CONSTRAINT `FK_5a2922ec9809f3f794c9924ae9a` FOREIGN KEY (`accessProfileId`) REFERENCES `accessProfile` (`id`),
  CONSTRAINT `FK_6aac19005cea8e2119cbe7759e8` FOREIGN KEY (`personId`) REFERENCES `person` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'2023-08-26 13:03:12.351633','2023-08-26 13:03:12.351633',NULL,'$2a$10$5QL2IaNwcrjPXN8ByFnCAeON.wwNDH1VGmjE7rJph6wOBiFb6MHMu',2,2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'clinplus'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-12 11:01:29
