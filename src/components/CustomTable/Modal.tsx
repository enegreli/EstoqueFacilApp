import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "../ui/button"
import { Label } from "@/components/ui/label"


export default function ModalEdit() {
  return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Novo Produto</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Novo Produto</DialogTitle>
            <form className="space-y-6 py-2">
              <div className="grid grid-cols-4 items-center text-left gap-3">
                <Label htmlFor="name">Produto</Label>
                <input className="col-span-3" id="name" />
              </div>
              <div className="grid grid-cols-4 items-center text-left gap-3">
                <Label htmlFor="name">Quantidade</Label>
                <input className="col-span-3" id="name" />
              </div>
              <div className="grid grid-cols-4 items-center text-left gap-3">
                <Label htmlFor="name">Preço</Label>
                <input className="col-span-3" id="name" />
              </div>
              <div className="grid grid-cols-4 items-center text-left gap-3">
                <Label htmlFor="name">Descrição</Label>
                <input className="col-span-3" id="name" />
              </div>
              <DialogFooter>
                <Button type="button" variant='outline'>Cancelar</Button>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
  )
}