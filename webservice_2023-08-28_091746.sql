/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
DROP TABLE IF EXISTS medicine_information;
CREATE TABLE `medicine_information` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `manufacturer` varchar(255) DEFAULT NULL,
  `category` enum('전문','일반','departed') DEFAULT NULL,
  `dosage` varchar(255) DEFAULT NULL,
  `efficacy` text,
  `administration` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `interaction_warning` text,
  `age_warning` text,
  `pregnancy_warning` text,
  `efficacy_duplication` text,
  `dosage_caution` text,
  `duration_caution` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS user;
CREATE TABLE `user` (
  `id` varchar(20) NOT NULL COMMENT 'userID',
  `password` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `height` varchar(255) DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL,
  `sick1` varchar(255) DEFAULT NULL,
  `sick2` varchar(255) DEFAULT NULL,
  `sick3` varchar(255) DEFAULT NULL,
  `sick4` varchar(255) DEFAULT NULL,
  `sick5` varchar(255) DEFAULT NULL,
  `allergy1` varchar(255) DEFAULT NULL,
  `allergy2` varchar(255) DEFAULT NULL,
  `allergy3` varchar(255) DEFAULT NULL,
  `allergy4` varchar(255) DEFAULT NULL,
  `allergy5` varchar(255) DEFAULT NULL,
  `significant1` varchar(255) DEFAULT NULL,
  `significant2` varchar(255) DEFAULT NULL,
  `significant4` varchar(255) DEFAULT NULL,
  `significant5` varchar(255) DEFAULT NULL,
  `significant3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='사용자계정';

INSERT INTO medicine_information(id,name,manufacturer,category,dosage,efficacy,administration,interaction_warning,age_warning,pregnancy_warning,efficacy_duplication,dosage_caution,duration_caution) VALUES('\'1_1\'','\'펠로엔정\'','\'휴온스\'','\'전문\'','\'성인 : 1회 1정, 1일 3회\'','X\'eab3a8eab480eca088ec97bc2c20eba598eba788ed8bb0ec8aa4eab480eca088ec97bc2c20ec9a94ed86b5\'','X\'ec8b9ded9b8420eab2bdeab5ac20ed88acec97ac\'','NULL','X\'3139\'','X\'4f\'','X\'34\'','NULL','NULL'),('\'2_1\'','\'타이레놀\'','\'한국존슨앤드존슨\'','\'일반\'','\'12세 미만 : 금지\'','X\'ebb09cec97b42c20eb9190ed86b52c20ec8ba0eab2bded86b52c20eab7bcec9ca1ed86b52c20ec9b94eab2bded86b52c20ec97bceca28ced86b5\'','X\'eab2bdeab5ac20ed88acec97ac\'','NULL','X\'3132\'','NULL','NULL','X\'38\'','NULL'),('\'2_2\'','\'타이레놀\'','\'한국존슨앤드존슨\'','\'일반\'','\'12세 이상 성인 이하 : 1회 1정, 1일 3~4회\'','X\'ebb09cec97b42c20eb9190ed86b52c20ec8ba0eab2bded86b52c20eab7bcec9ca1ed86b52c20ec9b94eab2bded86b52c20ec97bceca28ced86b5\'','X\'eab2bdeab5ac20ed88acec97ac\'','NULL','X\'3132\'','NULL','NULL','X\'38\'','NULL'),('\'2_3\'','\'타이레놀\'','\'한국존슨앤드존슨\'','\'일반\'','\'성인 : 1회 2정, 1일 3~4회\'','X\'ebb09cec97b42c20eb9190ed86b52c20ec8ba0eab2bded86b52c20eab7bcec9ca1ed86b52c20ec9b94eab2bded86b52c20ec97bceca28ced86b5\'','X\'eab2bdeab5ac20ed88acec97ac\'','NULL','X\'3132\'','NULL','NULL','X\'38\'','NULL'),('\'3_1\'','\'아진팜\'','\'일양약품\'','\'일반\'','\'15세 이상 : 1회 1정, 1일 3회\'','X\'ec868ced9994ebb688eb9f892c20ec8b9dec9a95eab090ed87b42c20eab3bcec8b9d2c20ecb2b4ed95a82c20ec868ced9994ecb489eca784\'','X\'eab2bdeab5ac20ed88acec97ac\'','NULL','X\'3134\'','NULL','NULL','NULL','NULL'),('\'4_1\'','\'애스펜정\'','\'휴온스\'','\'전문\'','\'성인 : 1일 2~4회\'','X\'eab3a8eab480eca088ec97bc2c20eba598eba788ed8bb0ec8aa4eab480eca088ec97bc2c20ec9a94ed86b5\'','X\'eab2bdeab5ac20ed88acec97ac\'','NULL','X\'3139\'','X\'4f\'','X\'31\'','X\'34\'','NULL'),('\'5_1\'','\'네오티가손캡슐\'','\'종근당\'','\'전문\'','\'소아 : 1일 1kg당 0.5mg, 1일 35mg 미만\'','X\'eb868ded8facec84b120eab1b4ec84a02c20ec8bacec8381ec84b120eab1b4ec84a0\'','X\'eab2bdeab5ac20ed88acec97ac\'','X\'362c2037\'','NULL','X\'4f\'','NULL','NULL','NULL'),('\'5_2\'','\'네오티가손캡슐\'','\'종근당\'','\'전문\'','\'성인 : 1일 25~30mg 미만\'','X\'eb868ded8facec84b120eab1b4ec84a02c20ec8bacec8381ec84b120eab1b4ec84a0\'','X\'eab2bdeab5ac20ed88acec97ac\'','X\'362c2037\'','NULL','X\'4f\'','NULL','NULL','NULL'),('\'6_1\'','\'테라싸이클린캅셀\'','\'종근당\'','\'전문\'','\'12세 이상 성인 이하 : 1일 체중 kg당 25~50mg을 4회 분할 투여\'','X\'ec9ca0ed9aa8eab7a0eca285203a20ed858ced8ab8eb9dbcec82acec9db4ed81b4eba6b0ec97bcec82b0ec97bcec979020eab090ec8898ec84b1ec9db820eba6acecbc80ecb0a82c20ed8f90eba0b4ebafb8ecbd94ed948ceb9dbcec8aa4eba7882c20ec95b5ebacb4ebb391ed81b4eb9dbcebafb8eb9494ec95842c20ec9eaceab780ec97b4eab7a02c20ec9ca1ec9584eca285ed94bceba789ec84b1eab5aceab7a02c20ed8ab8eb9dbcecbd94eba78820ed81b4eb9dbcebafb8eb9494ec95842c20ec97b0ec84b1ed9598eab090eab7a02c20ecbd9ceba088eb9dbceab7a02c20ed8e98ec8aa4ed8ab8eab7a02c20ebb095ed858ceba19cec9db4eb939c2c20ebb88ceba3a8ec8580eb9dbc2c20eb8c80ec9ea5eab7a02c20ec9794ed858ceba19cebb095ed84b020ec9790ec96b4eba19ceab28ceb84a4ec8aa42c20ec9db8ed948ceba3a8ec9794ec9e90eab7a02c20ed81b4eba088ebb88cec8b9cec9798eb9dbc2c20ec97b0ec8784eab5aceab7a02c20ed8f90eba0b4ec97b0ec8784eab5aceab7a02c20ed99a9ec8389ed8faceb8f84eab5aceab7a02c20ec9e84eab7a02c20eba7a4eb8f85ed8ab8eba088ed8faceb84a4eba7882c20eba6acec8aa4ed858ceba6acec958420ebaaa8eb85b8ec82acec9db4ed86a0eca09ceb8b88ec8aa42c20ed8384eca080eab7a02c20ed91b8eca1b0ebb095ed858ceba5a82c20ec95bced86a0ebb391eab7a00aeca081ec9d91eca69d203a20ebb09ceca784ed8bb0ed91b8ec8aa42c20ebb09ceca784ec97b42c20ec9691ecb6a9ebb39128ecaf94ecaf94eab080ebacb4ec8b9cebb391292c20ed8190ec97b42c20eba19ded82a4ec82b020ed998debb098ec97b42c20eba6acecbc80ecb998ec9584eb91902c20ebafb8ecbd94ed948ceb9dbcec8aa4eba788ed8f90eba0b42c20ebb984eb9198eab8b0ebb3912c20ec95b5ebacb4ebb3912c20ec849ced989cec9ca1ec9584eca2852c20ec84b1ebb391ec84b1eba6bced9484ec9ca1ec9584eca2852c20ec9eaceab780ec97b42c20ec97b0ec84b1ed9598eab0902c20ecbd9ceba088eb9dbc2c20ed8e98ec8aa4ed8ab82c20ec95bcec839ded86a0eb81bcebb3912c20ebb88ceba3a8ec8580eb9dbceca69d2c20eba7a4eb8f852c20eba6acec8aa4ed858ceba6acec9584eca69d2c20ed8384eca0802c20ec97aceb939ceba6842c20ebb489ec9e85ecb2b4eab2b0eba789ec97bc2c20ed8eb8eb8f84ec97bc2c20ec9db8eb9190ec97bc2c20ed9b84eb9190ec97bc2c20eab8b0eab480eca780ec97bc2c20eab8b0eab480eca780ed9995ec9ea5eca69d28eab090ec97bc20ec8b9c292c20ed8f90eba0b42c20ed8f90eb868dec96912c20ec9ca0ec84a0ec97bc2c20eba6bced9484eab480ec97bc2c20eab3a8ec8898ec97bc2c20ec84b1ed998dec97b42c20ec99b8ec9db4eb8f84ec97bc2c20eca491ec9db4ec97bc2c20ebb680ebb984eb8f99ec97bc2c20ec9ca0ec9691eb8f8ceab8b0ec97bc2c20ec9e84eca7882c20ec8ba0ec9ab0ec8ba0ec97bc2c20ebb0a9eab491ec97bc2c20ec9a94eb8f84ec97bc2c20ec9e90eab681eb82b4eab090ec97bc2c20eab080ec8aa4eab4b4eca0802c20ec9980ec9dbcebb3912c20ebb0b1ec9dbced95b42c20eab889ec84b1eb8888ebacbceca3bceba8b8eb8b88ec97bc2c20ecb998eca1b0eb868dec96912c20eb878ceb868dec9691\'','X\'eab2bdeab5ac20ed88acec97ac\'','NULL','X\'3132\'','X\'4f\'','NULL','NULL','NULL'),('\'6_2\'','\'테라싸이클린캅셀\'','\'종근당\'','\'전문\'','\'성인 : 1일 1g을 4회 분할 투여\'','X\'ec9ca0ed9aa8eab7a0eca285203a20ed858ced8ab8eb9dbcec82acec9db4ed81b4eba6b0ec97bcec82b0ec97bcec979020eab090ec8898ec84b1ec9db820eba6acecbc80ecb0a82c20ed8f90eba0b4ebafb8ecbd94ed948ceb9dbcec8aa4eba7882c20ec95b5ebacb4ebb391ed81b4eb9dbcebafb8eb9494ec95842c20ec9eaceab780ec97b4eab7a02c20ec9ca1ec9584eca285ed94bceba789ec84b1eab5aceab7a02c20ed8ab8eb9dbcecbd94eba78820ed81b4eb9dbcebafb8eb9494ec95842c20ec97b0ec84b1ed9598eab090eab7a02c20ecbd9ceba088eb9dbceab7a02c20ed8e98ec8aa4ed8ab8eab7a02c20ebb095ed858ceba19cec9db4eb939c2c20ebb88ceba3a8ec8580eb9dbc2c20eb8c80ec9ea5eab7a02c20ec9794ed858ceba19cebb095ed84b020ec9790ec96b4eba19ceab28ceb84a4ec8aa42c20ec9db8ed948ceba3a8ec9794ec9e90eab7a02c20ed81b4eba088ebb88cec8b9cec9798eb9dbc2c20ec97b0ec8784eab5aceab7a02c20ed8f90eba0b4ec97b0ec8784eab5aceab7a02c20ed99a9ec8389ed8faceb8f84eab5aceab7a02c20ec9e84eab7a02c20eba7a4eb8f85ed8ab8eba088ed8faceb84a4eba7882c20eba6acec8aa4ed858ceba6acec958420ebaaa8eb85b8ec82acec9db4ed86a0eca09ceb8b88ec8aa42c20ed8384eca080eab7a02c20ed91b8eca1b0ebb095ed858ceba5a82c20ec95bced86a0ebb391eab7a00aeca081ec9d91eca69d203a20ebb09ceca784ed8bb0ed91b8ec8aa42c20ebb09ceca784ec97b42c20ec9691ecb6a9ebb39128ecaf94ecaf94eab080ebacb4ec8b9cebb391292c20ed8190ec97b42c20eba19ded82a4ec82b020ed998debb098ec97b42c20eba6acecbc80ecb998ec9584eb91902c20ebafb8ecbd94ed948ceb9dbcec8aa4eba788ed8f90eba0b42c20ebb984eb9198eab8b0ebb3912c20ec95b5ebacb4ebb3912c20ec849ced989cec9ca1ec9584eca2852c20ec84b1ebb391ec84b1eba6bced9484ec9ca1ec9584eca2852c20ec9eaceab780ec97b42c20ec97b0ec84b1ed9598eab0902c20ecbd9ceba088eb9dbc2c20ed8e98ec8aa4ed8ab82c20ec95bcec839ded86a0eb81bcebb3912c20ebb88ceba3a8ec8580eb9dbceca69d2c20eba7a4eb8f852c20eba6acec8aa4ed858ceba6acec9584eca69d2c20ed8384eca0802c20ec97aceb939ceba6842c20ebb489ec9e85ecb2b4eab2b0eba789ec97bc2c20ed8eb8eb8f84ec97bc2c20ec9db8eb9190ec97bc2c20ed9b84eb9190ec97bc2c20eab8b0eab480eca780ec97bc2c20eab8b0eab480eca780ed9995ec9ea5eca69d28eab090ec97bc20ec8b9c292c20ed8f90eba0b42c20ed8f90eb868dec96912c20ec9ca0ec84a0ec97bc2c20eba6bced9484eab480ec97bc2c20eab3a8ec8898ec97bc2c20ec84b1ed998dec97b42c20ec99b8ec9db4eb8f84ec97bc2c20eca491ec9db4ec97bc2c20ebb680ebb984eb8f99ec97bc2c20ec9ca0ec9691eb8f8ceab8b0ec97bc2c20ec9e84eca7882c20ec8ba0ec9ab0ec8ba0ec97bc2c20ebb0a9eab491ec97bc2c20ec9a94eb8f84ec97bc2c20ec9e90eab681eb82b4eab090ec97bc2c20eab080ec8aa4eab4b4eca0802c20ec9980ec9dbcebb3912c20ebb0b1ec9dbced95b42c20eab889ec84b1eb8888ebacbceca3bceba8b8eb8b88ec97bc2c20ecb998eca1b0eb868dec96912c20eb878ceb868dec9691\'','X\'eab2bdeab5ac20ed88acec97ac\'','NULL','X\'3132\'','X\'4f\'','NULL','NULL','NULL'),('\'7_1\'','\'미노씬캡슐\'','\'에스케이케미칼\'','\'전문\'','\'12세 이상 성인 이하 : 1kg당 4mg 투여 이후 12시간마다 체중 kg당 2mg 투여\'','X\'ec9ca0ed9aa8eab7a0eca285203a20eba6acecbc80ecb0a82c20ed8f90eba0b4ebafb8ecbd94ed948ceb9dbcec8aa4eba7882c20ec95b5ebacb4ebb391ed81b4eb9dbcebafb8eb9494ec95842c20ec9eaceab780ec97b4eab7a02c20ec9ca1ec9584eca285ed94bceba789ec84b1eab5aceab7a02c20ed8ab8eb9dbcecbd94eba78820ed81b4eb9dbcebafb8eb9494ec95842c20ec97b0ec84b1ed9598eab090eab7a02c20ecbd9ceba088eb9dbceab7a02c20ed8e98ec8aa4ed8ab8eab7a02c20ebb095ed858ceba19cec9db4eb939c2c20ebb88ceba3a8ec8580eb9dbc2c20eb8c80ec9ea5eab7a02c20ec9794ed858ceba19cebb095ed84b02c20ec9db8ed948ceba3a8ec9794ec9e90eab7a02c20ed81b4eba088ebb88cec8b9cec9798eb9dbc2c20ec97b0ec8784eab5aceab7a02c20ed8f90eba0b4ec97b0ec8784eab5aceab7a02c20ed99a9ec8389ed8faceb8f84eab5aceab7a02c20ec9e84eab7a02c20eba7a4eb8f85ed8ab8eba088ed8faceb84a4eba7882c20eba6acec8aa4ed858ceba6acec958420ebaaa8eb85b8ec82acec9db4ed86a0eca09ceb8b88ec8aa42c20ed8384eca080eab7a02c20ed91b8eca1b0ebb095ed858ceba5a82c20ec95bced86a0ebb391eab7a02c20ec8898eba789ec97bceab7a028eca3bcec82ac290aeca081ec9d91eca69d203a20ebb09ceca784ed8bb0ed91b8ec8aa42c20ebb09ceca784ec97b42c20ec9691ecb6a9ebb39128ecaf94ecaf94eab080ebacb4ec8b9cebb391292c20ed8190ec97b42c20eba19ded82a4ec82b020ed998debb098ec97b42c20eba6acecbc80ecb998ec9584eb91902c20eca784eb939ceab8b0ec97b42c20ebafb8ecbd94ed948ceb9dbcec8aa4eba788ed8f90eba0b42c20ec95b5ebacb4ebb3912c20ec849ced989cec9ca1ec9584eca2852c20ec84b1ebb391ec84b1eba6bced9484ec9ca1ec9584eca2852c20ec9eaceab780ec97b42c20ec97b0ec84b1ed9598eab0902c20ecbd9ceba088eb9dbc2c20ed8e98ec8aa4ed8ab82c20ec95bced86a0ebb3912c20ebb88ceba3a8ec8580eb9dbceca69d2c20eba7a4eb8f852c20ed8384eca0802c20ed8eb8eb8f84ec97bc2c20ec9db8ed9b84eb9190ec97bc2c20eab8b0eab480eca780ec97bc2c20eab8b0eab480eca780ed9995ec9ea5eca69d28eab090ec97bc20ec8b9c292c20ed8f90eba0b42c20ed8f90eb868dec96912c20ec9ca0ec84a0ec97bc2c20eba6bced9484eab480ec97bc2c20eab3a8ec8898ec97bc2c20ec84b1ed998dec97b42c20eb8bb4eb82adec97bc2c20eb8bb4eab480ec97bc2c20ec99b8ec9db4eb8f84ec97bc2c20eca491ec9db4ec97bc2c20ebb680ebb984eb8f99ec97bc2c20ec9e84eca7882c20ec8ba0ec9ab0ec8ba0ec97bc2c20ebb0a9eab491ec97bc2c20ec9a94eb8f84ec97bc2c20ec9e90eab681eb82b4eab090ec97bc2c20eab889ec84b1eb8884eb82adec97bc2c20ecb998eca1b0eb868dec96912c20ec8898eba789ec97bc28eca3bcec82ac292c20ec9ea5eab480ec9584eba994ebb094eca69d2c20ed8ab8eb9dbcecbd94eba7882c20ec97aceb939ceba68428eab2bdeab5ac292c20eba6acec8aa4ed858ceba6acec9584eca69d2c20eab889ec84b1eab6a4ec9691ec84b1eab5aceab095ec97bc\'','X\'eab2bdeab5ac20ed88acec97ac\'','NULL','X\'3132\'','X\'4f\'','NULL','NULL','NULL'),('\'7_2\'','\'미노씬캡슐\'','\'에스케이케미칼\'','\'전문\'','\'성인 : 초회 200mg 투여 이후 12시간마다 100mg 투여\'','X\'ec9ca0ed9aa8eab7a0eca285203a20eba6acecbc80ecb0a82c20ed8f90eba0b4ebafb8ecbd94ed948ceb9dbcec8aa4eba7882c20ec95b5ebacb4ebb391ed81b4eb9dbcebafb8eb9494ec95842c20ec9eaceab780ec97b4eab7a02c20ec9ca1ec9584eca285ed94bceba789ec84b1eab5aceab7a02c20ed8ab8eb9dbcecbd94eba78820ed81b4eb9dbcebafb8eb9494ec95842c20ec97b0ec84b1ed9598eab090eab7a02c20ecbd9ceba088eb9dbceab7a02c20ed8e98ec8aa4ed8ab8eab7a02c20ebb095ed858ceba19cec9db4eb939c2c20ebb88ceba3a8ec8580eb9dbc2c20eb8c80ec9ea5eab7a02c20ec9794ed858ceba19cebb095ed84b02c20ec9db8ed948ceba3a8ec9794ec9e90eab7a02c20ed81b4eba088ebb88cec8b9cec9798eb9dbc2c20ec97b0ec8784eab5aceab7a02c20ed8f90eba0b4ec97b0ec8784eab5aceab7a02c20ed99a9ec8389ed8faceb8f84eab5aceab7a02c20ec9e84eab7a02c20eba7a4eb8f85ed8ab8eba088ed8faceb84a4eba7882c20eba6acec8aa4ed858ceba6acec958420ebaaa8eb85b8ec82acec9db4ed86a0eca09ceb8b88ec8aa42c20ed8384eca080eab7a02c20ed91b8eca1b0ebb095ed858ceba5a82c20ec95bced86a0ebb391eab7a02c20ec8898eba789ec97bceab7a028eca3bcec82ac290aeca081ec9d91eca69d203a20ebb09ceca784ed8bb0ed91b8ec8aa42c20ebb09ceca784ec97b42c20ec9691ecb6a9ebb39128ecaf94ecaf94eab080ebacb4ec8b9cebb391292c20ed8190ec97b42c20eba19ded82a4ec82b020ed998debb098ec97b42c20eba6acecbc80ecb998ec9584eb91902c20eca784eb939ceab8b0ec97b42c20ebafb8ecbd94ed948ceb9dbcec8aa4eba788ed8f90eba0b42c20ec95b5ebacb4ebb3912c20ec849ced989cec9ca1ec9584eca2852c20ec84b1ebb391ec84b1eba6bced9484ec9ca1ec9584eca2852c20ec9eaceab780ec97b42c20ec97b0ec84b1ed9598eab0902c20ecbd9ceba088eb9dbc2c20ed8e98ec8aa4ed8ab82c20ec95bced86a0ebb3912c20ebb88ceba3a8ec8580eb9dbceca69d2c20eba7a4eb8f852c20ed8384eca0802c20ed8eb8eb8f84ec97bc2c20ec9db8ed9b84eb9190ec97bc2c20eab8b0eab480eca780ec97bc2c20eab8b0eab480eca780ed9995ec9ea5eca69d28eab090ec97bc20ec8b9c292c20ed8f90eba0b42c20ed8f90eb868dec96912c20ec9ca0ec84a0ec97bc2c20eba6bced9484eab480ec97bc2c20eab3a8ec8898ec97bc2c20ec84b1ed998dec97b42c20eb8bb4eb82adec97bc2c20eb8bb4eab480ec97bc2c20ec99b8ec9db4eb8f84ec97bc2c20eca491ec9db4ec97bc2c20ebb680ebb984eb8f99ec97bc2c20ec9e84eca7882c20ec8ba0ec9ab0ec8ba0ec97bc2c20ebb0a9eab491ec97bc2c20ec9a94eb8f84ec97bc2c20ec9e90eab681eb82b4eab090ec97bc2c20eab889ec84b1eb8884eb82adec97bc2c20ecb998eca1b0eb868dec96912c20ec8898eba789ec97bc28eca3bcec82ac292c20ec9ea5eab480ec9584eba994ebb094eca69d2c20ed8ab8eb9dbcecbd94eba7882c20ec97aceb939ceba68428eab2bdeab5ac292c20eba6acec8aa4ed858ceba6acec9584eca69d2c20eab889ec84b1eab6a4ec9691ec84b1eab5aceab095ec97bc\'','X\'eab2bdeab5ac20ed88acec97ac\'','NULL','X\'3132\'','X\'4f\'','NULL','NULL','NULL'),('\'8_1\'','\'나제론오디정\'','\'보령\'','\'전문\'','\'성인 : 항암제 투여 전 1시간 이내 1일 1회 0.1mg 투여\'','X\'ed95adec9594eca09c20ed88acec97aceba19c20ec9db8ed959c20eab5aced86a0ec9d9820ebb0a9eca780\'','X\'eab2bdeab5ac20ed88acec97ac\'','NULL','X\'3139\'','X\'4f\'','NULL','NULL','X\'35\'');
INSERT INTO user(id,password,salt,name,email,sex,age,height,weight,sick1,sick2,sick3,sick4,sick5,allergy1,allergy2,allergy3,allergy4,allergy5,significant1,significant2,significant4,significant5,significant3) VALUES('\'test\'','\'68UcTzdOyfDx9v8FoDUwV/hcQQ6/ZnMG2Z/jZW6vkg4iIgTxUC+PKsYA4l+jbB/fgIvfKBPRi4wU4PI1SpU6Oo2/tN8pjU2bj2BNFPfc6pj/Edqqucip0ZXJ/oPIybA+ycFBsINhllRbRHHG36grN2Ks2pxmMIwj9Uus5OwLzKk=\'','\'6FMe5kbBLn6mYtaVYMmyG7HGIbU0yFl5jzjvdfIMyCdIndrOkOT/n3Nyo5pgV6LYtSLVrpOxav203Sjl0LsLWg==\'','\'test\'','\'test@test.com\'','NULL','NULL','NULL','NULL','NULL','NULL','NULL','NULL','NULL','NULL','NULL','NULL','NULL','NULL','NULL','NULL','NULL','NULL','NULL'),('\'ㅁ\'','\'HVKDJ4U+wEBXx1ZKnesLrWa/jMe5FI8JcZPOqJg6ka6mQNvTguIgpLtnz/mjRL/TRj688vKwshq+1E86I+RALqBTL7jtqFBNHZqwXbOcGlIEHAZU/BFydF10U4hcdBqaZsCGYvmTLoS3QzjG3ywBv0+FgmYzVpnxLD8+zfFpN/Y=\'','\'XWt9GUIWn3dPKpKiewqlK/KQUN7I0RpVgOIkubM4ER1WHl2SeYBIa9gVDZpsn460Nv3u6HAD73k+8s3lY7dQQg==\'','\'a\'','\'a@a.com\'','\'male\'','\'2000\'','\'2\'','\'2\'','\'\'','\'\'','\'\'','\'\'','\'\'','\'\'','\'\'','\'\'','\'\'','\'\'','\'\'','\'\'','\'\'','\'\'','\'\'');