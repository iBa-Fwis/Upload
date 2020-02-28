package com.testUpload.uploader.model;

import javax.persistence.*;

@Entity
@Table(name = "image_table")
public class model {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "type")
    private String type;
    @Column(name = "pivByte", length = 5000000)
    private byte[] picByte;

    public model(String name, String typr, byte[] picByte) {
        this.name = name;
        this.type = typr;
        this.picByte = picByte;
    }

    public model() {
        super();
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getPicByte() {
        return picByte;
    }

    public void setPicByte(byte[] picByte) {
        this.picByte = picByte;
    }
}
