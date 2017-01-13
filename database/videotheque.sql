#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: vid_user
#------------------------------------------------------------

CREATE TABLE vid_user(
        id_user   int (11) Auto_increment  NOT NULL ,
        username  Varchar (255) NOT NULL ,
        password  Varchar (255) NOT NULL ,
        email     Varchar (255) NOT NULL ,
        lastname  Varchar (255) NOT NULL ,
        firstname Varchar (255) NOT NULL ,
        cp        Varchar (25) NOT NULL ,
        address   Varchar (255) NOT NULL ,
        country   Varchar (255) NOT NULL ,
        phone     Varchar (25) NOT NULL ,
        PRIMARY KEY (id_user ) ,
        UNIQUE (username )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_movie
#------------------------------------------------------------

CREATE TABLE vid_movie(
        id_movie     int (11) Auto_increment  NOT NULL ,
        name         Varchar (255) NOT NULL ,
        release_date Date NOT NULL ,
        rate         Float NOT NULL ,
        description  Text NOT NULL ,
        duration     Int NOT NULL ,
        PRIMARY KEY (id_movie )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_actor
#------------------------------------------------------------

CREATE TABLE vid_actor(
        id_actor  int (11) Auto_increment  NOT NULL ,
        lastname  Varchar (255) NOT NULL ,
        firstname Varchar (255) NOT NULL ,
        dob       Date NOT NULL ,
        PRIMARY KEY (id_actor )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_director
#------------------------------------------------------------

CREATE TABLE vid_director(
        id_director int (11) Auto_increment  NOT NULL ,
        lastname    Varchar (25) NOT NULL ,
        firstname   Varchar (25) NOT NULL ,
        dob         Date NOT NULL ,
        PRIMARY KEY (id_director )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_episode
#------------------------------------------------------------

CREATE TABLE vid_episode(
        id_episode   int (11) Auto_increment  NOT NULL ,
        name         Varchar (255) NOT NULL ,
        season       Int NOT NULL ,
        number       Int NOT NULL ,
        release_date Date NOT NULL ,
        description  Text NOT NULL ,
        duration     Int ,
        id_serie     Int NOT NULL ,
        PRIMARY KEY (id_episode )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_serie
#------------------------------------------------------------

CREATE TABLE vid_serie(
        id_serie    int (11) Auto_increment  NOT NULL ,
        name        Varchar (255) NOT NULL ,
        rate        Float NOT NULL ,
        description Text NOT NULL ,
        PRIMARY KEY (id_serie )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_movie_director
#------------------------------------------------------------

CREATE TABLE vid_movie_director(
        id_movie    Int NOT NULL ,
        id_director Int NOT NULL ,
        PRIMARY KEY (id_movie ,id_director )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_serie_director
#------------------------------------------------------------

CREATE TABLE vid_serie_director(
        id_director Int NOT NULL ,
        id_serie    Int NOT NULL ,
        PRIMARY KEY (id_director ,id_serie )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_movie_actor
#------------------------------------------------------------

CREATE TABLE vid_movie_actor(
        id_movie Int NOT NULL ,
        id_actor Int NOT NULL ,
        PRIMARY KEY (id_movie ,id_actor )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_serie_actor
#------------------------------------------------------------

CREATE TABLE vid_serie_actor(
        id_serie Int NOT NULL ,
        id_actor Int NOT NULL ,
        PRIMARY KEY (id_serie ,id_actor )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_user_movie
#------------------------------------------------------------

CREATE TABLE vid_user_movie(
        is_seen  Bool NOT NULL ,
        rate     Float ,
        id_movie Int NOT NULL ,
        id_user  Int NOT NULL ,
        PRIMARY KEY (id_movie ,id_user )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_user_serie
#------------------------------------------------------------

CREATE TABLE vid_user_serie(
        is_followed Bool NOT NULL ,
        rate        Float ,
        id_user     Int NOT NULL ,
        id_serie    Int NOT NULL ,
        PRIMARY KEY (id_user ,id_serie )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: vid_user_episode
#------------------------------------------------------------

CREATE TABLE vid_user_episode(
        is_seen    Bool NOT NULL ,
        rate       Float ,
        id_episode Int NOT NULL ,
        id_user    Int NOT NULL ,
        PRIMARY KEY (id_episode ,id_user )
)ENGINE=InnoDB;

ALTER TABLE vid_episode ADD CONSTRAINT FK_vid_episode_id_serie FOREIGN KEY (id_serie) REFERENCES vid_serie(id_serie);
ALTER TABLE vid_movie_director ADD CONSTRAINT FK_vid_movie_director_id_movie FOREIGN KEY (id_movie) REFERENCES vid_movie(id_movie);
ALTER TABLE vid_movie_director ADD CONSTRAINT FK_vid_movie_director_id_director FOREIGN KEY (id_director) REFERENCES vid_director(id_director);
ALTER TABLE vid_serie_director ADD CONSTRAINT FK_vid_serie_director_id_director FOREIGN KEY (id_director) REFERENCES vid_director(id_director);
ALTER TABLE vid_serie_director ADD CONSTRAINT FK_vid_serie_director_id_serie FOREIGN KEY (id_serie) REFERENCES vid_serie(id_serie);
ALTER TABLE vid_movie_actor ADD CONSTRAINT FK_vid_movie_actor_id_movie FOREIGN KEY (id_movie) REFERENCES vid_movie(id_movie);
ALTER TABLE vid_movie_actor ADD CONSTRAINT FK_vid_movie_actor_id_actor FOREIGN KEY (id_actor) REFERENCES vid_actor(id_actor);
ALTER TABLE vid_serie_actor ADD CONSTRAINT FK_vid_serie_actor_id_serie FOREIGN KEY (id_serie) REFERENCES vid_serie(id_serie);
ALTER TABLE vid_serie_actor ADD CONSTRAINT FK_vid_serie_actor_id_actor FOREIGN KEY (id_actor) REFERENCES vid_actor(id_actor);
ALTER TABLE vid_user_movie ADD CONSTRAINT FK_vid_user_movie_id_movie FOREIGN KEY (id_movie) REFERENCES vid_movie(id_movie);
ALTER TABLE vid_user_movie ADD CONSTRAINT FK_vid_user_movie_id_user FOREIGN KEY (id_user) REFERENCES vid_user(id_user);
ALTER TABLE vid_user_serie ADD CONSTRAINT FK_vid_user_serie_id_user FOREIGN KEY (id_user) REFERENCES vid_user(id_user);
ALTER TABLE vid_user_serie ADD CONSTRAINT FK_vid_user_serie_id_serie FOREIGN KEY (id_serie) REFERENCES vid_serie(id_serie);
ALTER TABLE vid_user_episode ADD CONSTRAINT FK_vid_user_episode_id_episode FOREIGN KEY (id_episode) REFERENCES vid_episode(id_episode);
ALTER TABLE vid_user_episode ADD CONSTRAINT FK_vid_user_episode_id_user FOREIGN KEY (id_user) REFERENCES vid_user(id_user);
