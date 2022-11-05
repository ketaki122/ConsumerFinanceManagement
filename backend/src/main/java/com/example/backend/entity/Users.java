package com.example.backend.entity;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Users
{
    private String name;
    private String phoneNo;
    private String email;
    @Id
    private String username;
    private String pwd;
    private String address;
    private String cardType;
    private String selectBank;
    private String savingsAccountNumber;
    private String ifscCode;
    private String status;

    public Users() {
    }

    public Users(String name, String phoneNo, String email, String username, String pwd, String address,
                 String cardType, String selectBank, String savingsAccountNumber, String ifscCode, String status) {
        super();
        this.name = name;
        this.phoneNo = phoneNo;
        this.email = email;
        this.username = username;
        this.pwd = pwd;
        this.address = address;
        this.cardType = cardType;
        this.selectBank = selectBank;
        this.savingsAccountNumber = savingsAccountNumber;
        this.ifscCode = ifscCode;
        this.status = status;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPhoneNo() {
        return phoneNo;
    }
    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPwd() {
        return pwd;
    }
    public void setPwd(String pwd) {
        this.pwd = pwd;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getCardType() {
        return cardType;
    }
    public void setCardType(String cardType) {
        this.cardType = cardType;
    }
    public String getSelectBank() {
        return selectBank;
    }
    public void setSelectBank(String selectBank) {
        this.selectBank = selectBank;
    }
    public String getSavingsAccountNumber() {
        return savingsAccountNumber;
    }
    public void setSavingsAccountNumber(String savingsAccountNumber) {
        this.savingsAccountNumber = savingsAccountNumber;
    }
    public String getIfscCode() {
        return ifscCode;
    }
    public void setIfscCode(String ifscCode) {
        this.ifscCode = ifscCode;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    @Override
    public String toString() {
        return "Users [name=" + name + ", phoneNo=" + phoneNo + ", email=" + email + ", username=" + username + ", pwd="
                + pwd + ", address=" + address + ", cardType=" + cardType + ", selectBank=" + selectBank
                + ", savingsAccountNumber=" + savingsAccountNumber + ", ifscCode=" + ifscCode + ", status=" + status
                + "]";
    }


}
