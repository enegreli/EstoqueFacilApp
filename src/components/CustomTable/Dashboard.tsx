import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { PaginationDemo } from "./Pagination"

import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import ModalEdit from '@/components/CustomTable/Modal'

export function Dashboard() {
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 mx-auto max-w-7xl space-y-4 ">
       <div className="flex items-center justify-between py-2 p-2">
            <form className="flex items-center gap-2 ">
              <Input name="id" placeholder="Id do Produto" />
              <Input name="name" placeholder="Nome do Produto" />
              <Button type="submit" variant='outline'>Filtrar Resultados</Button>
            </form>
            <ModalEdit />
          </div>
      <div className="border rounded-lg">
      <Table>
      <TableCaption>A list of your products</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Imagem</TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead className="">Quantidade</TableHead>
          <TableHead className="">Descrição</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {Array.from({ length: 5 }).map((i_, id) => {
                  return (
                    <TableRow key={id}>
                      <TableCell className="hidden sm:table-cell">
                        <Image
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src="/placeholder.svg"
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        <Badge variant="outline">{id}</Badge>
                      </TableCell>
                      
                      <TableCell className="hidden md:table-cell">
                        $499.99
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge variant="outline">10</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        Descrição dos produtos
                      </TableCell>
                    </TableRow>
                  )
                })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}></TableCell>
          <TableCell className="text-center">
              <PaginationDemo />
            </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
      </div>
    </div>
  )
}

