-- MySQL dump 10.13  Distrib 8.0.41, for Linux (x86_64)
--
-- Host: localhost    Database: liabraryMngmt
-- ------------------------------------------------------
-- Server version	8.0.41-0ubuntu0.24.04.1

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
-- Table structure for table `AUTHORS`
--
USE testLMS;
DROP TABLE IF EXISTS `AUTHORS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AUTHORS` (
  `authId` int NOT NULL,
  `Fname` varchar(20) NOT NULL,
  `Lname` varchar(20) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `catagory` varchar(20) DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`authId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AUTHORS`
--

LOCK TABLES `AUTHORS` WRITE;
/*!40000 ALTER TABLE `AUTHORS` DISABLE KEYS */;
INSERT INTO `AUTHORS` VALUES (1,'Amit','Sharma','amit.sharma@example.com','Fiction','Delhi, India'),(2,'Ravi','Verma','ravi.verma@example.com','Fiction','Mumbai, India'),(3,'Priya','Patel','priya.patel@example.com','Romance','Ahmedabad, India'),(4,'Anjali','Mehta','anjali.mehta@example.com','Drama','Bangalore, India'),(5,'Rahul','Kumar','rahul.kumar@example.com','Thriller','Chennai, India'),(6,'Sneha','Singh','sneha.singh@example.com','Fiction','Hyderabad, India'),(7,'Vikram','Gupta','vikram.gupta@example.com','Fantasy','Pune, India'),(8,'Neha','Choudhary','neha.choudhary@example.com','Mystery','Jaipur, India'),(9,'Karan','Yadav','karan.yadav@example.com','Fiction','Lucknow, India'),(10,'Pooja','Jha','pooja.jha@example.com','Romance','Kolkata, India'),(11,'Suresh','Bhatia','suresh.bhatia@example.com','Drama','Surat, India'),(12,'Deepika','Malhotra','deepika.malhotra@example.com','Fiction','Nagpur, India'),(13,'Rajesh','Nair','rajesh.nair@example.com','Thriller','Thiruvananthapuram, India'),(14,'Sonia','Reddy','sonia.reddy@example.com','Fantasy','Visakhapatnam, India'),(15,'Aishwarya','Desai','aishwarya.desai@example.com','Fiction','Indore, India'),(16,'Rohit','Khan','rohit.khan@example.com','Romance','Bhopal, India'),(17,'Tanvi','Sethi','tanvi.sethi@example.com','Drama','Coimbatore, India'),(18,'Nikhil','Chopra','nikhil.chopra@example.com','Thriller','Vadodara, India'),(19,'Meera','Kaur','meera.kaur@example.com','Fiction','Patna, India'),(20,'Kavita','Bansal','kavita.bansal@example.com','Mystery','Agra, India'),(21,'Arjun','Ahuja','arjun.ahuja@example.com','Fiction','Nashik, India'),(22,'Ritika','Sood','ritika.sood@example.com','Romance','Mysore, India'),(23,'Siddharth','Kaur','siddharth.kaur@example.com','Drama','Raipur, India'),(24,'Isha','Bhat','isha.bhat@example.com','Fiction','Jodhpur, India'),(25,'Vani','Dutta','vani.dutta@example.com','Thriller','Ranchi, India'),(26,'Aditya','Sen','aditya.sen@example.com','Fantasy','Dehradun, India'),(27,'Riya','Mukherjee','riya.mukherjee@example.com','Fiction','Guwahati, India'),(28,'Gaurav','Bose','gaurav.bose@example.com','Romance','Srinagar, India'),(29,'Tanya','Roy','tanya.roy@example.com','Drama','Kochi, India'),(30,'Shivam','Banerjee','shivam.banerjee@example.com','Thriller','Bhubaneswar, India'),(31,'Aarav ','Sharma','aarav.sharma@example.com','Fiction','Chandigarh, India'),(32,'Diya','Kapoor','diya.kapoor@example.com','Romance','Amritsar, India'),(33,'Kunal','Saxena','kunal.saxena@example.com','Drama','Ludhiana, India'),(34,'Rhea','Ghosh','rhea.ghosh@example.com','Fiction','Navi Mumbai, India'),(35,'Siddhi','Patil','siddhi.patil@example.com','Thriller','Aurangabad, India'),(36,'Harsh','Kumar','harsh.kumar@example.com','Fantasy','Jabalpur, India'),(37,'Naina','Singh','naina.singh@example.com','Fiction','Vadodara, India'),(38,'Raghav','Sharma','raghav.sharma@example.com','Romance','Gwalior, India'),(39,'Sakshi','Verma','sakshi.verma@example.com','Drama','Bikaner, India'),(40,'Vivek','Yadav','vivek.yadav@example.com','Thriller','Kota, India'),(41,'Ananya','Nair','ananya.nair@example.com','Fantasy','Mangalore, India'),(42,'Kartik','Reddy','kartik.reddy@example.com','Fiction','Tirupati, India'),(43,'Lavanya','Kaur','lavanya.kaur@example.com','Romance','Jammu, India'),(44,'Dev','Choudhary','dev.choudhary@example.com','Drama','Shimla, India'),(45,'Aditi','Malhotra','aditi.malhotra@example.com','Fiction','Rudrapur, India'),(46,'Rohan','Bansal','rohan.bansal@example.com','Thriller','Haldwani, India'),(47,'Sanya','Khan','sanya.khan@example.com','Fantasy','Kharagpur, India'),(48,'Kavish','Sethi','kavish.sethi@example.com','Fiction','Durgapur, India'),(49,'Tanisha','Gupta','tanisha.gupta@example.com','Romance','Bardhaman, India'),(50,'Rudra','Chopra','rudra.chopra@example.com','Drama','Siliguri, India'),(51,'Aarohi','Sharma','aarohi.sharma@example.com','Fiction','Kolkata, India'),(52,'Rishabh','Verma','rishabh.verma@example.com','Thriller','Delhi, India'),(53,'Pankaj','Patel','pankaj.patel@example.com','Fantasy','Ahmedabad, India'),(54,'Sakshi','Mehta','sakshi.mehta@example.com','Fiction','Bangalore, India'),(55,'Niranjan','Kumar','niranjan.kumar@example.com','Romance','Chennai, India'),(56,'Suman','Singh','suman.singh@example.com','Drama','Hyderabad, India'),(57,'Kavya','Gupta','kavya.gupta@example.com','Fiction','Pune, India'),(58,'Ritesh','Choudhary','ritesh.choudhary@example.com','Thriller','Jaipur, India'),(59,'Shweta','Nair','shweta.nair@example.com','Fantasy','Lucknow, India'),(60,'Vasudha','Reddy','vasudha.reddy@example.com','Fiction','Indore, India'),(61,'John','Doe','john.doe@example.com','Fiction','New York, USA'),(62,'Emily','Smith','emily.smith@example.com','Romance','London, UK'),(63,'Liam','Johnson','liam.johnson@example.com','Drama','Sydney, Australia'),(64,'Olivia','Williams','olivia.williams@example.com','Thriller','Toronto, Canada'),(65,'Noah','Brown','noah.brown@example.com','Fantasy','Dublin, Ireland'),(66,'Sophia','Jones','sophia.jones@example.com','Fiction','Auckland, New Zealand'),(67,'Mason','Garcia','mason.garcia@example.com','Romance','Madrid, Spain'),(68,'Isabella','Martinez','isabella.martinez@example.com','Drama','Rome, Italy'),(69,'Lucas','Hernandez','lucas.hernandez@example.com','Thriller','Berlin, Germany'),(70,'Mia','Lopez','mia.lopez@example.com','Fantasy','Paris, France'),(71,'Ethan','Gonzalez','ethan.gonzalez@example.com','Fiction','Lisbon, Portugal'),(72,'Ava','Wilson','ava.wilson@example.com','Romance','Amsterdam, Netherlands'),(73,'James','Anderson','james.anderson@example.com','Drama','Brussels, Belgium'),(74,'Charlotte','Thomas','charlotte.thomas@example.com','Thriller','Vienna, Austria'),(75,'Benjamin','Taylor','benjamin.taylor@example.com','Fantasy','Copenhagen, Denmark'),(76,'Amelia','Moore','amelia.moore@example.com','Fiction','Helsinki, Finland'),(77,'Alexander','Jackson','alexander.jackson@example.com','Romance','Oslo, Norway'),(78,'Harper','Martin','harper.martin@example.com','Drama','Stockholm, Sweden'),(79,'William','Lee','william.lee@example.com','Thriller','Zurich, Switzerland'),(80,'Ella','Perez','ella.perez@example.com','Fantasy','Athens, Greece'),(81,'Aarav','Sharma','aarav.sharma@example.com','Fiction','Delhi, India'),(82,'Diya','Kapoor','diya.kapoor@example.com','Romance','Amritsar, India'),(83,'Kunal','Saxena','kunal.saxena@example.com','Drama','Ludhiana, India'),(84,'Rhea','Ghosh','rhea.ghosh@example.com','Fiction','Navi Mumbai, India'),(85,'Siddhi','Patil','siddhi.patil@example.com','Thriller','Aurangabad, India'),(86,'Harsh','Kumar','harsh.kumar@example.com','Fantasy','Jabalpur, India'),(87,'Naina','Singh','naina.singh@example.com','Fiction','Vadodara, India'),(88,'Raghav','Sharma','raghav.sharma@example.com','Romance','Gwalior, India'),(89,'Sakshi','Verma','sakshi.verma@example.com','Drama','Bikaner, India'),(90,'Vivek','Yadav','vivek.yadav@example.com','Thriller','Kota, India'),(91,'Ananya','Nair','ananya.nair@example.com','Fantasy','Mangalore, India'),(92,'Kartik','Reddy','kartik.reddy@example.com','Fiction','Tirupati, India'),(93,'Lavanya','Kaur','lavanya.kaur@example.com','Romance','Jammu, India'),(94,'Dev','Choudhary','dev.choudhary@example.com','Drama','Shimla, India'),(95,'Aditi','Malhotra','aditi.malhotra@example.com','Fiction','Rudrapur, India'),(96,'Rohan','Bansal','rohan.bansal@example.com','Thriller','Haldwani, India'),(97,'Sanya','Khan','sanya.khan@example.com','Fantasy','Kharagpur, India'),(98,'Kavish','Sethi','kavish.sethi@example.com','Fiction','Durgapur, India'),(99,'Tanisha','Gupta','tanisha.gupta@example.com','Romance','Bardhaman, India'),(100,'Rudra','Chopra','rudra.chopra@example.com','Drama','Siliguri, India');
/*!40000 ALTER TABLE `AUTHORS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BOOKS`
--

DROP TABLE IF EXISTS `BOOKS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BOOKS` (
  `bookId` int NOT NULL,
  `title` varchar(250) DEFAULT NULL,
  `price` decimal(10,3) DEFAULT NULL,
  `cat_id` int DEFAULT NULL,
  `edition` varchar(25) DEFAULT NULL,
  `auth_id` int DEFAULT NULL,
  PRIMARY KEY (`bookId`),
  KEY `fk_auth_id` (`auth_id`),
  KEY `fr_cat_id` (`cat_id`),
  CONSTRAINT `fk_auth_id` FOREIGN KEY (`auth_id`) REFERENCES `AUTHORS` (`authId`),
  CONSTRAINT `fr_cat_id` FOREIGN KEY (`cat_id`) REFERENCES `BOOK_CATEGORY` (`cat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BOOKS`
--

LOCK TABLES `BOOKS` WRITE;
/*!40000 ALTER TABLE `BOOKS` DISABLE KEYS */;
INSERT INTO `BOOKS` VALUES (1,'The Alchemist',250.000,1,'10th Anniversary',1),(2,'The God of Small Things',255.000,2,'New Edition',2),(3,'Midnight\'s Children',260.000,1,'Special Edition',3),(4,'The White Tiger',265.000,2,'Paperback',4),(5,'The Inheritance of Loss',270.000,1,'Hardcover',5),(6,'The Namesake',275.000,2,'Reprint',6),(7,'A Fine Balance',280.000,1,'Anniversary Edition',7),(8,'The Palace of Illusions',285.000,2,'First Edition',8),(9,'The Shadow Lines',290.000,1,'Collector\'s Edition',9),(10,'The Hungry Tide',295.000,2,'Limited Edition',10),(11,'Train to Pakistan',300.000,1,'New Edition',11),(12,'The Guide',305.000,2,'Paperback',12),(13,'The Immortals of Meluha',310.000,1,'Hardcover',13),(14,'The Secret of the Nagas',315.000,2,'Special Edition',14),(15,'The Oath of the Vayuputras',320.000,1,'Anniversary Edition',15),(16,'The Ramayana',325.000,2,'Illustrated Edition',16),(17,'The Mahabharata',330.000,1,'Collector\'s Edition',17),(18,'The Great Indian Novel',335.000,2,'New Edition',18),(19,'The Cuckoo\'s Calling',340.000,1,'Hardcover',19),(20,'The Casual Vacancy',345.000,2,'Paperback',20),(21,'Harry Potter and the Philosopher\'s Stone',350.000,1,'Special Edition',21),(22,'The Da Vinci Code',355.000,2,'New Edition',22),(23,'The Catcher in the Rye',360.000,1,'Paperback',23),(24,'Pride and Prejudice',365.000,2,'Hardcover',24),(25,'1984',370.000,1,'Special Edition',25),(26,'To Kill a Mockingbird',375.000,2,'New Edition',26),(27,'The Great Gatsby',380.000,1,'Collector\'s Edition',27),(28,'Brave New World',385.000,2,'Paperback',28),(29,'Fahrenheit 451',390.000,1,'Hardcover',29),(30,'The Catch-22',395.000,2,'Special Edition',30),(31,'The Kite Runner',400.000,1,'New Edition',31),(32,'A Thousand Splendid Suns',405.000,2,'Paperback',32),(33,'The Book Thief',410.000,1,'Hardcover',33),(34,'The Fault in Our Stars',415.000,2,'Special Edition',34),(35,'The Perks of Being a Wallflower',420.000,1,'New Edition',35),(36,'The Road',425.000,2,'Paperback',36),(37,'The Night Circus',430.000,1,'Hardcover',37),(38,'The Girl on the Train',435.000,2,'Special Edition',38),(39,'The Help',440.000,1,'New Edition',39),(40,'Life of Pi',445.000,2,'Paperback',40),(41,'The Immortalists',450.000,1,'Hardcover',41),(42,'The Nightingale',455.000,2,'Special Edition',42),(43,'Where the Crawdads Sing',460.000,1,'New Edition',43),(44,'The Silent Patient',465.000,2,'Paperback',44),(45,'Anxious People',470.000,1,'Hardcover',45),(46,'The Vanishing Half',475.000,2,'Special Edition',46),(47,'The Seven Husbands of Evelyn Hugo',480.000,1,'New Edition',47),(48,'The Song of Achilles',485.000,2,'Paperback',48),(49,'Circe',490.000,1,'Hardcover',49),(50,'The Midnight Library',495.000,2,'Special Edition',50),(51,'The Alchemist',250.000,1,'10th Anniversary',1),(52,'The God of Small Things',255.000,2,'New Edition',2),(53,'Midnight\'s Children',260.000,1,'Special Edition',3),(54,'The White Tiger',265.000,2,'Paperback',4),(55,'The Inheritance of Loss',270.000,1,'Hardcover',5),(56,'The Namesake',275.000,2,'Reprint',6),(57,'A Fine Balance',280.000,1,'Anniversary Edition',7),(58,'The Palace of Illusions',285.000,2,'First Edition',8),(59,'The Shadow Lines',290.000,1,'Collector\'s Edition',9),(60,'The Hungry Tide',295.000,2,'Limited Edition',10),(61,'Train to Pakistan',300.000,1,'New Edition',11),(62,'The Guide',305.000,2,'Paperback',12),(63,'The Immortals of Meluha',310.000,1,'Hardcover',13),(64,'The Secret of the Nagas',315.000,2,'Special Edition',14),(65,'The Oath of the Vayuputras',320.000,1,'Anniversary Edition',15),(66,'The Ramayana',325.000,2,'Illustrated Edition',16),(67,'The Mahabharata',330.000,1,'Collector\'s Edition',17),(68,'The Great Indian Novel',335.000,2,'New Edition',18),(69,'The Cuckoo\'s Calling',340.000,1,'Hardcover',19),(70,'The Casual Vacancy',345.000,2,'Paperback',20),(71,'Harry Potter and the Philosopher\'s Stone',350.000,1,'Special Edition',21),(72,'The Da Vinci Code',355.000,2,'New Edition',22),(73,'The Catcher in the Rye',360.000,1,'Paperback',23),(74,'Pride and Prejudice',365.000,2,'Hardcover',24),(75,'1984',370.000,1,'Special Edition',25),(76,'To Kill a Mockingbird',375.000,2,'New Edition',26),(77,'The Great Gatsby',380.000,1,'Collector\'s Edition',27),(78,'Brave New World',385.000,2,'Paperback',28),(79,'Fahrenheit 451',390.000,1,'Hardcover',29),(80,'The Catch-22',395.000,2,'Special Edition',30),(81,'The Kite Runner',400.000,1,'New Edition',31),(82,'A Thousand Splendid Suns',405.000,2,'Paperback',32),(83,'The Book Thief',410.000,1,'Hardcover',33),(84,'The Fault in Our Stars',415.000,2,'Special Edition',34),(85,'The Perks of Being a Wallflower',420.000,1,'New Edition',35),(86,'The Road',425.000,2,'Paperback',36),(87,'The Night Circus',430.000,1,'Hardcover',37),(88,'The Girl on the Train',435.000,2,'Special Edition',38),(89,'The Help',440.000,1,'New Edition',39),(90,'Life of Pi',445.000,2,'Paperback',40),(91,'The Immortalists',450.000,1,'Hardcover',41),(92,'The Nightingale',455.000,2,'Special Edition',42),(93,'Where the Crawdads Sing',460.000,1,'New Edition',43),(94,'The Silent Patient',465.000,2,'Paperback',44),(95,'Anxious People',470.000,1,'Hardcover',45),(96,'The Vanishing Half',475.000,2,'Special Edition',46),(97,'The Seven Husbands of Evelyn Hugo',480.000,1,'New Edition',47),(98,'The Song of Achilles',485.000,2,'Paperback',48),(99,'Circe',490.000,1,'Hardcover',49),(100,'The Midnight Library',495.000,2,'Special Edition',50);
/*!40000 ALTER TABLE `BOOKS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BOOK_CATEGORY`
--

DROP TABLE IF EXISTS `BOOK_CATEGORY`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BOOK_CATEGORY` (
  `cat_id` int NOT NULL,
  `category_name` varchar(50) NOT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BOOK_CATEGORY`
--

LOCK TABLES `BOOK_CATEGORY` WRITE;
/*!40000 ALTER TABLE `BOOK_CATEGORY` DISABLE KEYS */;
INSERT INTO `BOOK_CATEGORY` VALUES (1,'Fiction'),(2,'Romance'),(3,'Drama'),(4,'Thriller'),(5,'Fantasy'),(6,'Mystery'),(7,'Historical Fiction'),(8,'Non-Fiction'),(9,'Science Fiction'),(10,'Classic');
/*!40000 ALTER TABLE `BOOK_CATEGORY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `READERS`
--

DROP TABLE IF EXISTS `READERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `READERS` (
  `rid` int NOT NULL,
  `Fname` varchar(25) DEFAULT NULL,
  `Lname` varchar(25) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `address` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `READERS`
--

LOCK TABLES `READERS` WRITE;
/*!40000 ALTER TABLE `READERS` DISABLE KEYS */;
INSERT INTO `READERS` VALUES (1,'Rajendra','Pancholi','raje.pancholi@gmail.com','Dewas, India'),(2,'Vivaan','Verma','vivaan.verma@example.com','Mumbai, India'),(3,'Aditya','Patel','aditya.patel@example.com','Ahmedabad, India'),(4,'Vihaan','Mehta','vihaan.mehta@example.com','Bangalore, India'),(5,'Arjun','Kumar','arjun.kumar@example.com','Chennai, India'),(6,'Sai','Singh','sai.singh@example.com','Hyderabad, India'),(7,'Reyansh','Gupta','reyansh.gupta@example.com','Pune, India'),(8,'Krishna','Choudhary','krishna.choudhary@example.com','Jaipur, India'),(9,'Karan','Yadav','karan.yadav@example.com','Lucknow, India'),(10,'Rohan','Jha','rohan.jha@example.com','Kolkata, India'),(11,'Siddharth','Bhatia','siddharth.bhatia@example.com','Surat, India'),(12,'Nikhil','Malhotra','nikhil.malhotra@example.com','Nagpur, India'),(13,'Aarohi','Nair','aarohi.nair@example.com','Thiruvananthapuram, India'),(14,'Diya','Reddy','diya.reddy@example.com','Visakhapatnam, India'),(15,'Tanvi','Desai','tanvi.desai@example.com','Indore, India'),(16,'Sneha','Khan','sneha.khan@example.com','Bhopal, India'),(17,'Riya','Sethi','riya.sethi@example.com','Coimbatore, India'),(18,'Ananya','Kaur','ananya.kaur@example.com','Patna, India'),(19,'Kavya','Bansal','kavya.bansal@example.com','Agra, India'),(20,'Pooja','Dutta','pooja.dutta@example.com','Raipur, India'),(21,'Aditi','Sen','aditi.sen@example.com','Dehradun, India'),(22,'Ritika','Mukherjee','ritika.mukherjee@example.com','Guwahati, India'),(23,'Sakshi','Bose','sakshi.bose@example.com','Srinagar, India'),(24,'Meera','Roy','meera.roy@example.com','Kochi, India'),(25,'Naina','Banerjee','naina.banerjee@example.com','Bhubaneswar, India'),(26,'Harsh','Ghosh','harsh.ghosh@example.com','Navi Mumbai, India'),(27,'Raghav','Sharma','raghav.sharma@example.com','Chandigarh, India'),(28,'Kartik','Kumar','kartik.kumar@example.com','Mangalore, India'),(29,'Rudra','Patil','rudra.patil@example.com','Tirupati, India'),(30,'Gaurav','Kaur','gaurav.kaur@example.com','Jammu, India'),(31,'Shivam','Rai','shivam.rai@example.com','Shimla, India'),(32,'Aarav','Khan','aarav.khan@example.com','Haldwani, India'),(33,'Ritesh','Soni','ritesh.soni@example.com','Kharagpur, India'),(34,'Suman','Kumar','suman.kumar@example.com','Durgapur, India'),(35,'Kavya','Sharma','kavya.sharma@example.com','Jabal pur, India'),(36,'Ansh','Verma','ansh.verma@example.com','Ranchi, India'),(37,'Dev','Choudhary','dev.choudhary@example.com','Gwalior, India'),(38,'Riya','Patel','riya.patel@example.com','Agartala, India'),(39,'Nishant','Yadav','nishant.yadav@example.com','Raipur, India'),(40,'Siddhi','Nair','siddhi.nair@example.com','Kota, India'),(41,'Aarav','Bansal','aarav.bansal@example.com','Jodhpur, India'),(42,'Tanisha','Malhotra','tanisha.malhotra@example.com','Mysore, India'),(43,'Kunal','Reddy','kunal.reddy@example.com','Kozhikode, India'),(44,'Rishabh','Gupta','rishabh.gupta@example.com','Bikaner, India'),(45,'Pallavi','Sethi','pallavi.sethi@example.com','Udaipur, India'),(46,'Vansh','Kumar','vansh.kumar@example.com','Sangli, India'),(47,'Aanya','Sharma','aanya.sharma@example.com','Nashik, India'),(48,'Kartik','Singh','kartik.singh@example.com','Jabalpur, India'),(49,'Riya','Jha','riya.jha@example.com','Kota, India'),(50,'Shiv','Bhatia','shiv.bhatia@example.com','Dharamshala, India'),(51,'Neha','Kaur','neha.kaur@example.com','Rudrapur, India'),(52,'Aarav','Kumar','aarav.kumar@example.com','Hampi, India'),(53,'Sakshi','Gupta','sakshi.gupta@example.com','Kangra, India'),(54,'Rohan','Patel','rohan.patel@example.com','Kullu, India'),(55,'Ananya','Nair','ananya.nair@example.com','Kanyakumari, India'),(56,'Kavya','Rai','kavya.rai@example.com','Kumarakom, India'),(57,'Aditi','Sharma','aditi.sharma@example.com','Kochi, India'),(58,'Ritesh','Singh','ritesh.singh@example.com','Kharagpur, India'),(59,'Diya','Bansal','diya.bansal@example.com','Dibrugarh, India'),(60,'Harsh','Verma','harsh.verma@example.com','Kota, India'),(61,'Nikhil','Kumar','nikhil.kumar@example.com','Kolkata, India'),(62,'Siddharth','Gupta','siddharth.gupta@example.com','Patiala, India'),(63,'Riya','Malhotra','riya.malhotra@example.com','Jamshedpur, India'),(64,'Tanvi','Kaur','tanvi.kaur@example.com','Ranchi, India'),(65,'Aarav','Yadav','aarav.yadav@example.com','Bhopal, India'),(66,'Karan','Reddy','karan.reddy@example.com','Indore, India'),(67,'Pooja','Singh','pooja.singh@example.com','Nagpur, India'),(68,'Ansh','Sharma','ansh.sharma@example.com','Surat, India'),(69,'Dev','Kumar','dev.kumar@example.com','Ahmedabad, India'),(70,'Ritika','Patel','ritika.patel@example.com','Vadodara, India'),(71,'Sakshi','Nair','sakshi.nair@example.com','Pune, India'),(72,'Aanya','Gupta','aanya.gupta@example.com','Chennai, India'),(73,'Kunal','Bansal','kunal.bansal@example.com','Delhi, India'),(74,'Rohan','Kaur','rohan.kaur@example.com','Mumbai, India'),(75,'Neha','Sharma','neha.sharma@example.com','Ahmedabad, India'),(76,'Aarav','Patel','aarav.patel@example.com','Bangalore, India'),(77,'Siddharth','Yadav','siddharth.yadav@example.com','Chennai, India'),(78,'Tanisha','Gupta','tanisha.gupta@example.com','Hyderabad, India'),(79,'Kavya','Mehta','kavya.mehta@example.com','Pune, India'),(80,'Ritesh','Singh','ritesh.singh@example.com','Jaipur, India'),(81,'Diya','Khan','diya.khan@example.com','Lucknow, India'),(82,'Ananya','Reddy','ananya.reddy@example.com','Kolkata, India'),(83,'Harsh','Bhatia','harsh.bhatia@example.com','Surat, India'),(84,'Nikhil','Malhotra','nikhil.malhotra@example.com','Nagpur, India'),(85,'Aditi','Nair','aditi.nair@example.com','Thiruvananthapuram, India'),(86,'Riya','Dutta','riya.dutta@example.com','Visakhapatnam, India'),(87,'Karan','Choudhary','karan.choudhary@example.com','Indore, India'),(88,'Sakshi','Bansal','sakshi.bansal@example.com','Bhopal, India'),(89,'Aarav','Gupta','aarav.gupta@example.com','Coimbatore, India'),(90,'Rohan','Jha','rohan.jha@example.com','Kolkata, India'),(91,'Tanvi','Kaur','tanvi.kaur@example.com','Patna, India'),(92,'Pooja','Singh','pooja.singh@example.com','Agra, India'),(93,'Kartik','Yadav','kartik.yadav@example.com','Raipur, India'),(94,'Ritesh','Patel','ritesh.patel@example.com','Jodhpur, India'),(95,'Aanya','Rai','aanya.rai@example.com','Mysore, India'),(96,'Dev','Kumar','dev.kumar@example.com','Kozhikode, India'),(97,'Siddhi','Malhotra','siddhi.malhotra@example.com','Bikaner, India'),(98,'Kavya','Sharma','kavya.sharma@example.com','Udaipur, India'),(99,'Raghav','Gupta','raghav.gupta@example.com','Sangli, India'),(100,'Neha','Kaur','neha.kaur@example.com','Nashik, India');
/*!40000 ALTER TABLE `READERS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RETURN_DATES`
--

DROP TABLE IF EXISTS `RETURN_DATES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RETURN_DATES` (
  `rid` int NOT NULL,
  `book_id` int DEFAULT NULL,
  `issue_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `due_date` date DEFAULT NULL,
  `return_date` date DEFAULT NULL,
  `readId` int DEFAULT NULL,
  PRIMARY KEY (`rid`),
  KEY `fr_readId` (`readId`),
  KEY `fr_book_id` (`book_id`),
  CONSTRAINT `fr_book_id` FOREIGN KEY (`book_id`) REFERENCES `BOOKS` (`bookId`),
  CONSTRAINT `fr_readId` FOREIGN KEY (`readId`) REFERENCES `READERS` (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RETURN_DATES`
--

LOCK TABLES `RETURN_DATES` WRITE;
/*!40000 ALTER TABLE `RETURN_DATES` DISABLE KEYS */;
INSERT INTO `RETURN_DATES` VALUES (1,1,'2025-02-27 21:44:34','2025-03-13','2025-03-06',1),(2,2,'2025-02-27 21:44:34','2025-03-13','2025-03-09',2),(3,4,'2025-02-27 21:44:34','2025-03-13','2025-03-11',3),(4,8,'2025-02-27 21:44:34','2025-03-13','2025-03-04',4);
/*!40000 ALTER TABLE `RETURN_DATES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SALARIES`
--

DROP TABLE IF EXISTS `SALARIES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SALARIES` (
  `slr_id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(50) DEFAULT NULL,
  `salary` decimal(10,3) DEFAULT NULL,
  `shift` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`slr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SALARIES`
--

LOCK TABLES `SALARIES` WRITE;
/*!40000 ALTER TABLE `SALARIES` DISABLE KEYS */;
INSERT INTO `SALARIES` VALUES (21,'Head Librarian',70000.000,'Day'),(22,'Assistant Librarian',50000.000,'Day'),(23,'Library Technician',45000.000,'Day'),(24,'Cataloging Librarian',55000.000,'Day'),(25,'Reference Librarian',60000.000,'Day'),(26,'Children\'s Librarian',52000.000,'Day'),(27,'Digital Librarian',58000.000,'Day'),(28,'Library Assistant',40000.000,'Day'),(29,'Circulation Manager',65000.000,'Day'),(30,'Acquisitions Librarian',62000.000,'Day'),(31,'Outreach Librarian',57000.000,'Day'),(32,'Technical Services Librarian',59000.000,'Day'),(33,'Interlibrary Loan Coordinator',53000.000,'Day'),(34,'Library Director',80000.000,'Day'),(35,'Systems Librarian',68000.000,'Day'),(36,'Marketing Coordinator',48000.000,'Day'),(37,'Event Coordinator',45000.000,'Day'),(38,'Research Librarian',60000.000,'Day'),(39,'Volunteer Coordinator',35000.000,'Day'),(40,'Security Personnel',30000.000,'Night');
/*!40000 ALTER TABLE `SALARIES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `STAFF`
--

DROP TABLE IF EXISTS `STAFF`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `STAFF` (
  `sid` int NOT NULL,
  `Fname` varchar(25) DEFAULT NULL,
  `Lname` varchar(25) DEFAULT NULL,
  `role_id` int DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`sid`),
  KEY `fr_role_id` (`role_id`),
  CONSTRAINT `fr_role_id` FOREIGN KEY (`role_id`) REFERENCES `SALARIES` (`slr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `STAFF`
--

LOCK TABLES `STAFF` WRITE;
/*!40000 ALTER TABLE `STAFF` DISABLE KEYS */;
INSERT INTO `STAFF` VALUES (1,'Rajendra','Pancholi',21,'raje.pancholi@mail.com'),(2,'Raj','Kumar',22,'raj.kumar@example.com'),(3,'Sita','Verma',23,'sita.verma@example.com'),(4,'Vikram','Sharma',24,'vikram.sharma@example.com'),(5,'Priya','Singh',25,'priya.singh@example.com'),(6,'Amit','Gupta',26,'amit.gupta@example.com'),(7,'Neha','Kaur',27,'neha.kaur@example.com'),(8,'Ravi','Yadav',28,'ravi.yadav@example.com'),(9,'Kiran','Bansal',29,'kiran.bansal@example.com'),(10,'Deepak','Nair',30,'deepak.nair@example.com'),(11,'Sanjay','Choudhary',31,'sanjay.choudhary@example.com'),(12,'Ritika','Malhotra',32,'ritika.malhotra@example.com'),(13,'Aarav','Sharma',33,'aarav.sharma@example.com'),(14,'Tanvi','Reddy',34,'tanvi.reddy@example.com'),(15,'Kavya','Sethi',35,'kavya.sethi@example.com'),(16,'Nikhil','Kumar',36,'nikhil.kumar@example.com'),(17,'Sakshi','Gupta',37,'sakshi.gupta@example.com'),(18,'Rohan','Patel',38,'rohan.patel@example.com'),(19,'Pooja','Yadav',39,'pooja.yadav@example.com'),(20,'Gaurav','Bansal',40,'gaurav.bansal@example.com');
/*!40000 ALTER TABLE `STAFF` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TEST`
--

DROP TABLE IF EXISTS `TEST`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TEST` (
  `name` varchar(15) DEFAULT NULL,
  `id` int DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TEST`
--

LOCK TABLES `TEST` WRITE;
/*!40000 ALTER TABLE `TEST` DISABLE KEYS */;
INSERT INTO `TEST` VALUES ('KALU',2),('TAJ',2);
/*!40000 ALTER TABLE `TEST` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USERS`
--

DROP TABLE IF EXISTS `USERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USERS` (
  `uid` int DEFAULT NULL,
  `Fname` varchar(25) NOT NULL,
  `Lname` varchar(25) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `isAdmin` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USERS`
--

LOCK TABLES `USERS` WRITE;
/*!40000 ALTER TABLE `USERS` DISABLE KEYS */;
INSERT INTO `USERS` VALUES (1,'Rajendra','Pancholi','raje.pancholi@mail.com','2025-01-15','2025-02-27 22:23:56',1),(2,'Vivaan','Verma','vivaan.verma@example.com','1992-02-20','2025-02-27 22:23:56',0),(3,'Aditya','Patel','aditya.patel@example.com','1988-03-10','2025-02-27 22:23:56',0),(4,'Vihaan','Mehta','vihaan.mehta@example.com','1995-04-25','2025-02-27 22:23:56',0),(5,'Arjun','Kumar','arjun.kumar@example.com','1993-05-30','2025-02-27 22:23:56',0),(6,'Riya','Singh','riya.singh@example.com','1991-06-15','2025-02-27 22:23:56',0),(7,'Sneha','Gupta','sneha.gupta@example.com','1994-07-22','2025-02-27 22:23:56',0),(8,'Karan','Yadav','karan.yadav@example.com','1989-08-05','2025-02-27 22:23:56',0),(9,'Pooja','Bansal','pooja.bansal@example.com','1996-09-12','2025-02-27 22:23:56',0),(10,'Tanvi','Reddy','tanvi.reddy@example.com','1990-10-30','2025-02-27 22:23:56',1);
/*!40000 ALTER TABLE `USERS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-29 14:56:59
