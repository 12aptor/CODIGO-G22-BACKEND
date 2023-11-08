-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: db_devhub
-- ------------------------------------------------------
-- Server version	5.7.24

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
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$260000$mXNjqMzVqhsRPpXaWpZCnJ$F/jTM/RIQs0Cw/OiqSCrkI6czZWEmWDyVW8fE2Hya60=','2023-11-07 03:57:39.000000',1,'admin','cesar','mayta','cesarmayta@gmail.com',1,1,'2023-11-03 03:26:20.000000'),(3,'pbkdf2_sha256$260000$2Bq4vZLFj9Rtp6TLbjFDOc$bTGauZFmpocN8Zqmfy/FOFd3Xxy0PqzA2wJywTvN5Kc=',NULL,0,'csalinas','carmen','salinas','csalinas@gmail.com',0,1,'2023-11-07 03:22:50.346145');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2023-11-03 03:27:49.456309','1','Category object (1)',1,'[{\"added\": {}}]',7,1),(2,'2023-11-04 01:26:53.573157','1','cesar mayta',3,'',8,1),(3,'2023-11-04 01:29:54.458903','2','César Mayta',1,'[{\"added\": {}}]',8,1),(4,'2023-11-07 03:57:59.231660','1','admin',2,'[{\"changed\": {\"fields\": [\"First name\", \"Last name\", \"Email address\"]}}]',4,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(8,'api','candidate'),(7,'api','category'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-11-03 03:19:26.189600'),(2,'auth','0001_initial','2023-11-03 03:19:27.584286'),(3,'admin','0001_initial','2023-11-03 03:19:27.877347'),(4,'admin','0002_logentry_remove_auto_add','2023-11-03 03:19:27.885382'),(5,'admin','0003_logentry_add_action_flag_choices','2023-11-03 03:19:27.894375'),(6,'contenttypes','0002_remove_content_type_name','2023-11-03 03:19:28.000959'),(7,'auth','0002_alter_permission_name_max_length','2023-11-03 03:19:28.044816'),(8,'auth','0003_alter_user_email_max_length','2023-11-03 03:19:28.113849'),(9,'auth','0004_alter_user_username_opts','2023-11-03 03:19:28.123843'),(10,'auth','0005_alter_user_last_login_null','2023-11-03 03:19:28.180870'),(11,'auth','0006_require_contenttypes_0002','2023-11-03 03:19:28.183899'),(12,'auth','0007_alter_validators_add_error_messages','2023-11-03 03:19:28.193898'),(13,'auth','0008_alter_user_username_max_length','2023-11-03 03:19:28.248872'),(14,'auth','0009_alter_user_last_name_max_length','2023-11-03 03:19:28.313871'),(15,'auth','0010_alter_group_name_max_length','2023-11-03 03:19:28.383880'),(16,'auth','0011_update_proxy_permissions','2023-11-03 03:19:28.395871'),(17,'auth','0012_alter_user_first_name_max_length','2023-11-03 03:19:28.449301'),(18,'sessions','0001_initial','2023-11-03 03:19:28.653440');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('5b85ts8fjmow8bxqs9jv6l039hb3g7zl','.eJxVjDsOwyAQRO9CHSFYPoKU6XMGtCwQnEQgGbuycvfYkoukGmnem9lYwHWpYR15DlNiVybZ5beLSK_cDpCe2B6dU2_LPEV-KPykg997yu_b6f4dVBx1Xys0BYTGogB0dplIoPVgtfIQVbEuJiOzTE4WIcjTntYZtNZ7QKcj-3wB2HY3dQ:1r0DDf:65d02-YdZb_ilb8lyAnfCWz23E0Fb12WusjjB0JKkzM','2023-11-21 03:57:39.722253'),('isu6w1jxrxtoms3ebv4rt0zgqct9a65r','.eJxVjDsOwyAQRO9CHSFYPoKU6XMGtCwQnEQgGbuycvfYkoukGmnem9lYwHWpYR15DlNiVybZ5beLSK_cDpCe2B6dU2_LPEV-KPykg997yu_b6f4dVBx1Xys0BYTGogB0dplIoPVgtfIQVbEuJiOzTE4WIcjTntYZtNZ7QKcj-3wB2HY3dQ:1qykpa:UTYTcG_oJ-MN0LQLUZyc0IV4I8O2MzuY_IWogaRhKUg','2023-11-17 03:26:46.592183');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_candidate`
--

DROP TABLE IF EXISTS `tbl_candidate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_candidate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `title` varchar(200) NOT NULL,
  `experience_year` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `resume` varchar(255) DEFAULT NULL,
  `aboutme` longtext,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_candidate_tbl_location1` (`location_id`),
  CONSTRAINT `fk_tbl_candidate_tbl_location1` FOREIGN KEY (`location_id`) REFERENCES `tbl_location` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_candidate`
--

LOCK TABLES `tbl_candidate` WRITE;
/*!40000 ALTER TABLE `tbl_candidate` DISABLE KEYS */;
INSERT INTO `tbl_candidate` VALUES (2,'César Mayta','image/upload/v1699061393/focvcgawuezic2uvswsw.jpg','Backend developer',5,1,NULL,'Backend developer con 5 años de experiencia en python django flask y fastapi');
/*!40000 ALTER TABLE `tbl_candidate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_candidate_experience`
--

DROP TABLE IF EXISTS `tbl_candidate_experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_candidate_experience` (
  `position` varchar(200) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` longtext,
  `date_start` date NOT NULL,
  `date_end` date DEFAULT NULL,
  `candidate_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_candidate_experience_tbl_candidate1` (`candidate_id`),
  KEY `fk_tbl_candidate_experience_tbl_company1` (`company_id`),
  CONSTRAINT `fk_tbl_candidate_experience_tbl_candidate1` FOREIGN KEY (`candidate_id`) REFERENCES `tbl_candidate` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_candidate_experience_tbl_company1` FOREIGN KEY (`company_id`) REFERENCES `tbl_company` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_candidate_experience`
--

LOCK TABLES `tbl_candidate_experience` WRITE;
/*!40000 ALTER TABLE `tbl_candidate_experience` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_candidate_experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_candidate_skill`
--

DROP TABLE IF EXISTS `tbl_candidate_skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_candidate_skill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `candidate_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_candidate_skill_tbl_candidate1` (`candidate_id`),
  KEY `fk_tbl_candidate_skill_tbl_skill1` (`skill_id`),
  CONSTRAINT `fk_tbl_candidate_skill_tbl_candidate1` FOREIGN KEY (`candidate_id`) REFERENCES `tbl_candidate` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_candidate_skill_tbl_skill1` FOREIGN KEY (`skill_id`) REFERENCES `tbl_skill` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_candidate_skill`
--

LOCK TABLES `tbl_candidate_skill` WRITE;
/*!40000 ALTER TABLE `tbl_candidate_skill` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_candidate_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_candidate_study`
--

DROP TABLE IF EXISTS `tbl_candidate_study`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_candidate_study` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `school` varchar(200) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` longtext,
  `date_start` date NOT NULL,
  `date_end` date DEFAULT NULL,
  `candidate_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_candidate_study_tbl_candidate1` (`candidate_id`),
  CONSTRAINT `fk_tbl_candidate_study_tbl_candidate1` FOREIGN KEY (`candidate_id`) REFERENCES `tbl_candidate` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_candidate_study`
--

LOCK TABLES `tbl_candidate_study` WRITE;
/*!40000 ALTER TABLE `tbl_candidate_study` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_candidate_study` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_category`
--

DROP TABLE IF EXISTS `tbl_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_category`
--

LOCK TABLES `tbl_category` WRITE;
/*!40000 ALTER TABLE `tbl_category` DISABLE KEYS */;
INSERT INTO `tbl_category` VALUES (1,'FRONTEND'),(2,'BACKEND');
/*!40000 ALTER TABLE `tbl_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_company`
--

DROP TABLE IF EXISTS `tbl_company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_company`
--

LOCK TABLES `tbl_company` WRITE;
/*!40000 ALTER TABLE `tbl_company` DISABLE KEYS */;
INSERT INTO `tbl_company` VALUES (1,'BANCO DE CREDITO'),(2,'NTTDATA'),(3,'Globant');
/*!40000 ALTER TABLE `tbl_company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_job`
--

DROP TABLE IF EXISTS `tbl_job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_job` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(200) DEFAULT NULL,
  `title` varchar(200) NOT NULL,
  `salary` double NOT NULL,
  `created_date` date DEFAULT NULL,
  `vacancies` int(11) DEFAULT NULL,
  `description` longtext,
  `company_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `experience_year` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_job_tbl_company` (`company_id`),
  KEY `fk_tbl_job_tbl_type1` (`type_id`),
  KEY `fk_tbl_job_tbl_category1` (`category_id`),
  KEY `fk_tbl_job_tbl_location1` (`location_id`),
  CONSTRAINT `fk_tbl_job_tbl_category1` FOREIGN KEY (`category_id`) REFERENCES `tbl_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_job_tbl_company` FOREIGN KEY (`company_id`) REFERENCES `tbl_company` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_job_tbl_location1` FOREIGN KEY (`location_id`) REFERENCES `tbl_location` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_job_tbl_type1` FOREIGN KEY (`type_id`) REFERENCES `tbl_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_job`
--

LOCK TABLES `tbl_job` WRITE;
/*!40000 ALTER TABLE `tbl_job` DISABLE KEYS */;
INSERT INTO `tbl_job` VALUES (1,'http://res.cloudinary.com/dlojblrut/image/upload/v1699068627/phiaxn5zdx0winlcwnlw.jpg','Senior Python/Django Engineer',3000,'2023-11-03',1,'As a Senior Fullstack Python Developer, you will be building websites, mobile apps, and backend services aiming to support different phases of the business workflow. Using different open-source technologies like Python, Django, and others. You will be working with cross-functional teams using Scrum.',3,1,2,1,1,5),(2,'http://res.cloudinary.com/dlojblrut/image/upload/v1699068627/phiaxn5zdx0winlcwnlw.jpg','python junior',1000,'2023-11-03',1,'As a Senior Fullstack Python Developer, you will be building websites, mobile apps, and backend services aiming to support different phases of the business workflow. Using different open-source technologies like Python, Django, and others. You will be working with cross-functional teams using Scrum.',1,2,2,1,1,5),(3,'http://res.cloudinary.com/dlojblrut/image/upload/v1699068627/phiaxn5zdx0winlcwnlw.jpg','node developer',1000,'2023-11-02',2,'node developer for NTTDATA',2,2,2,1,1,1),(4,'http://res.cloudinary.com/dlojblrut/image/upload/v1699068627/phiaxn5zdx0winlcwnlw.jpg','FLASK DEVELOPER',5000,NULL,NULL,NULL,1,1,1,1,1,1);
/*!40000 ALTER TABLE `tbl_job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_job_apply`
--

DROP TABLE IF EXISTS `tbl_job_apply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_job_apply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_apply` date NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `job_id` int(11) NOT NULL,
  `candidate_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_job_apply_tbl_job1` (`job_id`),
  KEY `fk_tbl_job_apply_tbl_candidate1` (`candidate_id`),
  CONSTRAINT `fk_tbl_job_apply_tbl_candidate1` FOREIGN KEY (`candidate_id`) REFERENCES `tbl_candidate` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_job_apply_tbl_job1` FOREIGN KEY (`job_id`) REFERENCES `tbl_job` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_job_apply`
--

LOCK TABLES `tbl_job_apply` WRITE;
/*!40000 ALTER TABLE `tbl_job_apply` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_job_apply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_job_skill`
--

DROP TABLE IF EXISTS `tbl_job_skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_job_skill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_job_skill_tbl_job1` (`job_id`),
  KEY `fk_tbl_job_skill_tbl_skill1` (`skill_id`),
  CONSTRAINT `fk_tbl_job_skill_tbl_job1` FOREIGN KEY (`job_id`) REFERENCES `tbl_job` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_job_skill_tbl_skill1` FOREIGN KEY (`skill_id`) REFERENCES `tbl_skill` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_job_skill`
--

LOCK TABLES `tbl_job_skill` WRITE;
/*!40000 ALTER TABLE `tbl_job_skill` DISABLE KEYS */;
INSERT INTO `tbl_job_skill` VALUES (1,1,1),(2,1,2),(3,2,1),(4,3,3),(5,4,1),(6,4,2);
/*!40000 ALTER TABLE `tbl_job_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_location`
--

DROP TABLE IF EXISTS `tbl_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_location`
--

LOCK TABLES `tbl_location` WRITE;
/*!40000 ALTER TABLE `tbl_location` DISABLE KEYS */;
INSERT INTO `tbl_location` VALUES (1,'Perú');
/*!40000 ALTER TABLE `tbl_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_skill`
--

DROP TABLE IF EXISTS `tbl_skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_skill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_skill`
--

LOCK TABLES `tbl_skill` WRITE;
/*!40000 ALTER TABLE `tbl_skill` DISABLE KEYS */;
INSERT INTO `tbl_skill` VALUES (1,'PYTHON'),(2,'Sql'),(3,'NODE');
/*!40000 ALTER TABLE `tbl_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_type`
--

DROP TABLE IF EXISTS `tbl_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_type`
--

LOCK TABLES `tbl_type` WRITE;
/*!40000 ALTER TABLE `tbl_type` DISABLE KEYS */;
INSERT INTO `tbl_type` VALUES (1,'Remoto'),(2,'Presencial'),(3,'Hibrido');
/*!40000 ALTER TABLE `tbl_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_devhub'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-07 20:38:03
