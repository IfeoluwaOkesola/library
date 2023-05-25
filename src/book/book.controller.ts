/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';
import { CreateBookDto } from './dto/create.book.dto';
import { UpdateBookDto } from './dto/update_book.dto';



@Controller('book')
export class BookController {
    constructor(private bookService: BookService){}
    
    @Get()
    async getAllBooks(): Promise<Book[]>{
        return this.bookService.findAll()
    }

    @Post() //we can define an additional route inside the bracket of this post, for example if new is written. It will be localhost:3000/books/new
    async createBook(
        @Body()
        book: CreateBookDto,
    ): Promise<Book>{
        return this.bookService.create(book)
    }

    @Get(':id')
    async getBook(
        @Param('id')
        id: string
    ): Promise<Book>{
        return this.bookService.findById(id)
    }

    @Put(':id') 
    async updateBook(
        @Param('id')
        id: string,
        @Body()
        book: UpdateBookDto,
    ): Promise<Book>{
        return this.bookService.updateById(id, book)
    }

    @Delete(':id')
    async deleteBook(
        @Param('id')
        id: string
    ): Promise<Book>{
        return this.bookService.deleteById(id)
    }
}
