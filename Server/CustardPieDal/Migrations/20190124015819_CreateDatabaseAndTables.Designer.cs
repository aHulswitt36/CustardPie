﻿// <auto-generated />
using System;
using CustardPieDal;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace CustardPieDal.Migrations
{
    [DbContext(typeof(CustardPieDbContext))]
    [Migration("20190124015819_CreateDatabaseAndTables")]
    partial class CreateDatabaseAndTables
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.1-servicing-10028")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("CustardPieDal.Models.Band", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Bands");
                });

            modelBuilder.Entity("CustardPieDal.Models.Member", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Bio");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Members");
                });

            modelBuilder.Entity("CustardPieDal.Models.Photo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Source");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.ToTable("Photos");
                });

            modelBuilder.Entity("CustardPieDal.Models.Schedule", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Date");

                    b.Property<string>("Location");

                    b.Property<string>("Venue");

                    b.HasKey("Id");

                    b.ToTable("Schedule");
                });

            modelBuilder.Entity("CustardPieDal.Models.Song", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("BandId");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.HasIndex("BandId");

                    b.ToTable("Songs");
                });

            modelBuilder.Entity("CustardPieDal.Models.Song", b =>
                {
                    b.HasOne("CustardPieDal.Models.Band")
                        .WithMany("Songs")
                        .HasForeignKey("BandId");
                });
#pragma warning restore 612, 618
        }
    }
}
