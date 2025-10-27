"use client";
import { FooterSimple } from '@/components/regular/footer'
import { Navbar10 } from '@/components/ui/shadcn-io/navbar-10'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table"
import {
  management,
  communityLeaders,
  staff,
  areaHeads,
  type StaffMember,
  type AreaHead,
  type CommunityLeader,
} from "./data"

// Table component for Management
const ManagementTable = () => (
  <Card className="w-full h-full">
    <CardHeader>
      <CardTitle className="text-2xl">Dirección</CardTitle>
    </CardHeader>
    <CardContent>
      <Table>
        <TableCaption>Equipo de Dirección</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Turno</TableHead>
            <TableHead>Cargo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {management.map((member, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{member.name}</TableCell>
              <TableCell>{member.shift}</TableCell>
              <TableCell>{member.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
)

// Table component for Community Leaders
const CommunityLeadersTable = () => (
  <Card className="w-full h-full">
    <CardHeader>
      <CardTitle className="text-2xl">Líderes Comunitarios</CardTitle>
    </CardHeader>
    <CardContent>
      <Table>
        <TableCaption>Representantes de la Comunidad</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Cargo</TableHead>
            <TableHead>Nombre</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {communityLeaders.map((leader, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{leader.role}</TableCell>
              <TableCell>{leader.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
)

// Table component for Staff
const StaffTable = () => (
  <Card className="w-full h-full">
    <CardHeader>
      <CardTitle className="text-2xl">Personal Administrativo</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="max-h-[500px] overflow-y-auto">
        <Table>
          <TableCaption>Personal Completo de la Institución</TableCaption>
          <TableHeader className="sticky top-0 bg-background">
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Turno</TableHead>
              <TableHead>Cargo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staff.map((member, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>{member.shift}</TableCell>
                <TableCell>{member.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
)

// Table component for Area Heads
const AreaHeadsTable = () => (
  <Card className="w-full h-full">
    <CardHeader>
      <CardTitle className="text-2xl">Coordinadores de Área</CardTitle>
    </CardHeader>
    <CardContent>
      <Table>
        <TableCaption>Coordinadores por Área Académica</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Área</TableHead>
            <TableHead>Coordinador</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {areaHeads.map((head, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{head.area}</TableCell>
              <TableCell>{head.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
)

export default function InstitucionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar10 />
      <main className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gobernanza y Comunidad
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conoce al equipo que guía nuestra institución y a los líderes que representan a nuestra comunidad educativa.
          </p>
        </div>

        {/* Grid layout with tables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Management Table - Full width on mobile, spans 2 columns on desktop */}
          <div className="md:col-span-2">
            <ManagementTable />
          </div>

          {/* Community Leaders Table */}
          <div>
            <CommunityLeadersTable />
          </div>

          {/* Area Heads Table */}
          <div>
            <AreaHeadsTable />
          </div>

          {/* Staff Table - Full width */}
          <div className="md:col-span-2">
            <StaffTable />
          </div>
        </div>
      </main>
      <FooterSimple />
    </div>
  )
}

