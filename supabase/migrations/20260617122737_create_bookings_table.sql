CREATE TABLE bookings (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  child_name text NOT NULL,
  school_name text NOT NULL,
  parent_email text NOT NULL,
  whatsapp text NOT NULL,
  child_year text NOT NULL,
  message text,
  booking_date date NOT NULL,
  booking_time text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert a booking (public form)
CREATE POLICY "anyone_can_insert_bookings" ON bookings FOR INSERT
  TO anon WITH CHECK (true);

-- Only authenticated (admin) can view bookings
CREATE POLICY "authenticated_can_view_bookings" ON bookings FOR SELECT
  TO authenticated USING (true);

-- Only authenticated (admin) can update bookings
CREATE POLICY "authenticated_can_update_bookings" ON bookings FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated (admin) can delete bookings
CREATE POLICY "authenticated_can_delete_bookings" ON bookings FOR DELETE
  TO authenticated USING (true);