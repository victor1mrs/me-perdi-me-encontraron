'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import axios from "axios"

const PublishFoundPet = () => {

  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/pets/', {
        name: 'Fido',
        date_found: '2023-10-23T12:00:00Z',
        location: {
          google_place_id: 'aosdfpasdnfpsadf',
          lat: 40.7128,
          long: -74.0060,
          city_name: 'New York',
        },
        email: 'fido@example.com',
        phone: '123-456-7890',
        picture_url: 'https://example.com/fido.jpg',
        status: 'Found',
      });

      console.log('Response:', response.data);
      // Handle the response as needed.
    } catch (error) {
      console.error('Error:', error);
      // Handle errors.
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="mt-10 flex-grow mb-10">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Publiquemos tu mascota</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Select id="sex" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Macho / Hembra" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Macho</SelectLabel>
                        <SelectItem value="admin">Hembra</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Select id="sex" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Perry</SelectLabel>
                        <SelectItem value="admin">Gaty</SelectItem>
                        <SelectItem value="admin">Otro</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="color">Color</Label>
                <Input id="color" placeholder="Color" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="direccion">Direccion donde la encontrate</Label>
                <Input id="direccion" placeholder="Direccion" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="descripcion">Descripcion</Label>
                <Input id="descripcion" placeholder="Descripcion" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="johndoe@example.com" required type="email" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" onClick={handleClick}>
              Publicar!
            </Button>
          </CardFooter>
        </Card>
      </div>x
    </div>
  )
}


export default PublishFoundPet;