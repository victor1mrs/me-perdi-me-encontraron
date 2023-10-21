'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useState } from 'react';

const PublishFoundPet = () => {
  // State to manage input values
  const [formData, setFormData] = useState({
    sex: '',
    type: '',
    color: '',
    direccion: '',
    descripcion: '',
    email: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle the POST request
  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/pets/', {
        name: formData.sex, // Assuming you want to use 'sex' as the 'name'
        date_found: new Date().toISOString(), // Current timestamp
        location: {
          google_place_id: '', // You can add the appropriate value
          lat: 0, // You can add the appropriate value
          long: 0, // You can add the appropriate value
          city_name: '', // You can add the appropriate value
        },
        email: formData.email,
        phone: '', // You can add the appropriate value
        picture_url: '', // You can add the appropriate value
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
                  <Select id="sex" name="sex" value={formData.sex} onChange={handleInputChange} required>
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
                  <Select id="type" name="type" value={formData.type} onChange={handleInputChange} required>
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
                <Input id="color" name="color" value={formData.color} onChange={handleInputChange} placeholder="Color" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="direccion">Direccion donde la encontrate</Label>
                <Input id="direccion" name="direccion" value={formData.direccion} onChange={handleInputChange} placeholder="Direccion" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="descripcion">Descripcion</Label>
                <Input id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleInputChange} placeholder="Descripcion" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="johndoe@example.com" required type="email" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" onClick={handleClick}>
              Publicar!
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};


export default PublishFoundPet;